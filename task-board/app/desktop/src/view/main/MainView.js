onTaskSelect = function(dataView, selections) {
  if (selections.length) {
    this.up('columncontainer').loadTaskRecord(selections[0]);
  }
}
Ext.define('TaskBoard.view.main.MainView', {
  extend: 'Ext.container.Container',
  xtype: 'mainview',
  alias: 'widget.columncontainer',
  title: 'Tasks',
  defaults: {
    xtype: 'panel',
    bodyPadding: 10
  },
  layout: {
    type: 'hbox',
    align: 'stretch'
  },
  openable: 2,
  items: [{
    title: 'PLAN',
    flex: 1,
    items: [{
      xtype: 'dataview',
      selectable: true,
      ui: 'default',
      reference: 'dataview',
      itemTpl: '<div class="task-tile task-tile_importance_{importance}">' +
          '<h3>{name}</h3>' +
          '</div>',
      store: {
        type: 'taskviewstore',
        filters: [{
          property: 'status',
          value: /PLAN/
        }]
      },
      listeners: {
        selectionchange: onTaskSelect
      }
    }]

  },{
    title: 'IN PROGRESS',
    flex: 1,
    items: [{
      xtype: 'dataview',
      selectable: true,
      ui: 'default',
      reference: 'dataview',
      itemTpl: '<div class="task-tile task-tile_importance_{importance}">' +
          '<h3>{name}</h3>' +
          '</div>',
      store: {
        type: 'taskviewstore',
        filters: [{
          property: 'status',
          value: /IN PROGRESS/
        }]
      },
      listeners: {
        selectionchange: onTaskSelect
      }
    }]
  }, {
    title: 'TESTING',
    flex: 1,
    items: [{
      xtype: 'dataview',
      selectable: true,
      ui: 'default',
      reference: 'dataview',
      itemTpl: '<div class="task-tile task-tile_importance_{importance}">' +
          '<h3>{name}</h3>' +
          '</div>',
      store: {
        type: 'taskviewstore',
        filters: [{
          property: 'status',
          value: /TESTING/
        }]
      },
      listeners: {
        selectionchange: onTaskSelect
      }
    }]
  }, {
    title: 'DONE',
    flex: 1,
    items: [{
      xtype: 'dataview',
      selectable: true,
      ui: 'default',
      reference: 'dataview',
      itemTpl: '<div class="task-tile task-tile_importance_{importance}">' +
          '<h2>{number}</h2>' +
          '<h3>{title}</h3>' +
          '</div>',
      store: {
        type: 'taskviewstore',
        filters: [{
          property: 'status',
          value: /DONE/
        }],
        sorters: [{
          property: 'name',
          direction: 'ASC'
        }, {
          direction: 'ASC',
          sorterFn: function(record1, record2) {
            let importance1 = record1.data.importance;
            let importance2 = record2.data.importance;

            let importanceWeight1 = importance1 === "MUST" ? 1 : (importance1 === "SHOULD") ? 2 : 3;
            let importanceWeight2 = importance2 === "MUST" ? 1 : (importance2 === "SHOULD") ? 2 : 3;


            return importanceWeight1 > importanceWeight2 ? 1 : (importanceWeight1 === importanceWeight2) ? 0 : -1;
          },
        }],
      },
      listeners: {
        selectionchange: onTaskSelect
      }
    }]
  }, {
    title: 'Info',
    docked: 'bottom',
    items: [{
      xtype: 'panel',
      alias: 'widget.infopanel'

    }]
  }],
  loadTaskRecord: function(task) {
    this.down('panel[title="Info"]').setHtml(
        `<strong>Number:</strong> ${task.data.number}<br>
        <strong>Title:</strong> ${task.data.title}<br>
        <strong>Status:</strong> ${task.data.status}<br>
        <strong>Importance:</strong> ${task.data.importance}<br>
        <strong>Date:</strong> ${task.data.date}<br>
        <strong>Assigned:</strong> ${task.data.surname} ${task.data.name}`
    )
  },


})

