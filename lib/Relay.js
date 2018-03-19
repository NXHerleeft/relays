class ElectricComponent extends Event {
    constructor() {
        super();
    }

    update(){}
}

class Relay extends ElectricComponent {
    constructor() {
        super();

        this.coils = [];
        this.switches = [];
        this.level = 0.0; // The current state of the relay. 0.0 means completely down, 1.0 completely up.
        this.levelTimeout = null;
        //this.baseSwitchTime = 1.0; // In seconds, both coils at 12V
    }
}

class JRelay extends Relay {
    constructor() {
        super();

        this.coils = [
            {
                '14': null,
                '15': null,
            },
            {
                '34': null,
                '35': null,
            },
        ];
        //this.baseSwitchTime = 1.5; // In seconds, both coils at 12V
    }
}

class BRelay extends Relay {
    constructor() {
        super();

        this.coils = [
            {
                '3A': null,
                '3B': null,
            },
            {
                '3C': null,
                '3D': null,
            },
        ];
        this.baseSwitchTime = 1.5; // In seconds, both coils at 12V
    }
}

class Switch extends ElectricComponent {
    constructor() {
        super();

        this.A = null;
        this.down = null;
        this.up = null;
    }
}

class Connector extends ElectricComponent {
    constructor() {
        super();

        this.connections = []; // Array of Node objects
    }
}

module.exports = {
    JRelay: JRelay,
    BRelay: BRelay,
    Switch: Switch,
    Connector: Connector,
};