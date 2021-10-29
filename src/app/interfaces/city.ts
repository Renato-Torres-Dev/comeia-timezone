export interface City {
    name: string,
    main: Temp,
    weather: Array<Weather>
}


export interface Temp {
    feels_like: number,
    humidity: number,
    pressure: number,
    temp: number,
    temp_max: number,
    temp_min: number,
}

export interface Weather {
    description: string,
}