Ext.define('Examples.view.personnel.TaskViewStore', {
    extend: 'Ext.data.Store',
    alias: 'store.taskviewstore',
    fields: [
        'number', 'title', 'name', 'surname', 'status', 'importance', 'date'
    ],
    data: { items: [
        { number: "TSK-0001", title: "Check code style", name: "James", surname: "Smith", status: "PLAN", importance: "MUST", date: "12.02.2022" },
        { number: "TSK-0002", title: "Set up a testing environment", name: "Robert", surname: "Brown", status: "IN PROGRESS", importance: "SHOULD", date: "13.02.2022"  },
        { number: "TSK-0003", title: "Test build 2.6", name: "John", surname: "Wilson", status: "PLAN", importance: "COULD", date: "14.02.2022"  },
        { number: "TSK-0004", title: "Write documentation", name: "Michael", surname: "Robinson", status: "DONE", importance: "MUST", date: "15.02.2022"  },
        { number: "TSK-0005", title: "Post to client", name: "Rick", surname: "Daves", status: "TESTING", importance: "MUST", date: "12.02.2022"  },
        { number: "TSK-0006", title: "Read documentation 1.5", name: "James", surname: "Smith", status: "DONE", importance: "COULD", date: "13.02.2022"  },
        { number: "TSK-0007", title: "Read documentation 1.6", name: "James", surname: "Smith", status: "DONE", importance: "MUST", date: "13.02.2022"  },
        { number: "TSK-0008", title: "Read documentation 1.7", name: "James", surname: "Smith", status: "DONE", importance: "SHOULD", date: "13.02.2022"  },
    ]},
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
