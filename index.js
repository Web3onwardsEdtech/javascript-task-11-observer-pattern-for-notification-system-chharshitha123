class NotificationSystem {
    constructor() {
        this._observers = []; 
    }

    subscribe(observer) {
        this._observers.push(observer); 
    }

    unsubscribe(observer) {
        this._observers = this._observers.filter(obs => obs !== observer); 
    }

    notify(data) {
        this._observers.forEach(observer => observer.update(data)); 
    }
}

class Observer {
    constructor(name) {
        this.name = name;
    }

    update(data) {
        console.log(`${this.name} received: ${data}`);
    }
}


console.log("Set 1");
const notificationSystem1 = new NotificationSystem();

const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");

notificationSystem1.subscribe(observer1);
notificationSystem1.subscribe(observer2);

notificationSystem1.notify("Event A");


notificationSystem1.unsubscribe(observer2);

notificationSystem1.notify("Event B");
console.log("\nSet 2:");
const notificationSystem2 = new NotificationSystem(); 

const observer3 = new Observer("Observer 1");
const observer4 = new Observer("Observer 2");


notificationSystem2.subscribe(observer3);


notificationSystem2.notify("Event X");


notificationSystem2.subscribe(observer4);

notificationSystem2.notify("Event Y");
console.log("\nSet 3:");
const notificationSystem3 = new NotificationSystem(); 
const observer5 = new Observer("Observer 2");


notificationSystem3.subscribe(observer5);


notificationSystem3.notify("Event 100");


notificationSystem3.unsubscribe(observer5);


notificationSystem3.notify("Event 101");
console.log("\nSet 4:");
const notificationSystem4 = new NotificationSystem(); 

const observer6 = new Observer("Observer 1");
const observer7 = new Observer("Observer 2");

notificationSystem4.subscribe(observer6);
notificationSystem4.subscribe(observer7);


notificationSystem4.notify("Event Hello");

notificationSystem4.unsubscribe(observer6);
notificationSystem4.unsubscribe(observer7);


notificationSystem4.notify("Event Goodbye");