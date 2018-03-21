namespace models {

    export interface CidadeBr {
        _id: string;
        _rev: string;
        ibgeCityCode: number;
        cityName: string;
        ibgeStateCode: number;
        state: string;
        stateName: string;
        latitude: number;
        longitude: number;
    }

}
