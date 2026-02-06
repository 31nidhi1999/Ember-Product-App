export interface TripData {
    from? : string;
    to? : string;
    data? :  string;
    mode? : 'flight' | 'train' | 'bus';
    seats? : number;
    passengerName ? : string;
    passengerAge ? : number;
}