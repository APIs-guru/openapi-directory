import { SpeakeasyBase } from "../../../internal/utils";
export declare class Server extends SpeakeasyBase {
    attributes?: Map<string, any>;
    bingKey?: string;
    coordinateFormat?: string;
    deviceReadonly?: boolean;
    forceSettings?: boolean;
    id?: number;
    latitude?: number;
    limitCommands?: boolean;
    longitude?: number;
    map?: string;
    mapUrl?: string;
    poiLayer?: string;
    readonly?: boolean;
    registration?: boolean;
    twelveHourFormat?: boolean;
    version?: string;
    zoom?: number;
}
