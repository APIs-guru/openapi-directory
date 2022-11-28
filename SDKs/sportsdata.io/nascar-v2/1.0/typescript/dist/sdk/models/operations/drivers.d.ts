import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DriversFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class DriversPathParams extends SpeakeasyBase {
    format: DriversFormatEnum;
}
export declare class DriversRequest extends SpeakeasyBase {
    pathParams: DriversPathParams;
}
export declare class DriversResponse extends SpeakeasyBase {
    contentType: string;
    drivers?: any[];
    statusCode: number;
}
