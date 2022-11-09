import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum DriverRaceProjectionsEntryListFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class DriverRaceProjectionsEntryListPathParams extends SpeakeasyBase {
    format: DriverRaceProjectionsEntryListFormatEnum;
    raceid: string;
}
export declare class DriverRaceProjectionsEntryListRequest extends SpeakeasyBase {
    pathParams: DriverRaceProjectionsEntryListPathParams;
}
export declare class DriverRaceProjectionsEntryListResponse extends SpeakeasyBase {
    contentType: string;
    driverRaceProjections?: any[];
    statusCode: number;
}
