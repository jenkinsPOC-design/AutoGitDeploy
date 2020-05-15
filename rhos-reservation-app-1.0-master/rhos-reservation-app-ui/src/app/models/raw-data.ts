export class RawData {
    stations: Array<string>;
    trainTypeList: Array<string>;
    constructor() {
        this.stations = [
            'Kolkata',
            'Hyderabad',
            'Mumbai',
            'Chennai',
            'Pune'
        ];

        this.trainTypeList = [
            'Intercity',
            'Maitri',
            'SuperMail',
            'Intergallop'
        ];
    }
}
