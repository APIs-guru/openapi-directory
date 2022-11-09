import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum DriverDetailsFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class DriverDetailsPathParams extends SpeakeasyBase {
    driverid: string;
    format: DriverDetailsFormatEnum;
}
export declare class DriverDetailsRequest extends SpeakeasyBase {
    pathParams: DriverDetailsPathParams;
}
export declare class DriverDetailsResponse extends SpeakeasyBase {
    contentType: string;
    driver?: any;
    statusCode: number;
}
