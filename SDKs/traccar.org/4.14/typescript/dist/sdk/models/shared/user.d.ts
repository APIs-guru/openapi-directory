import { SpeakeasyBase } from "../../../internal/utils";
export declare class User extends SpeakeasyBase {
    administrator?: boolean;
    attributes?: Map<string, any>;
    coordinateFormat?: string;
    deviceLimit?: number;
    deviceReadonly?: boolean;
    disabled?: boolean;
    email?: string;
    expirationTime?: Date;
    id?: number;
    latitude?: number;
    limitCommands?: boolean;
    longitude?: number;
    map?: string;
    name?: string;
    password?: string;
    phone?: string;
    poiLayer?: string;
    readonly?: boolean;
    token?: string;
    twelveHourFormat?: boolean;
    userLimit?: number;
    zoom?: number;
}
