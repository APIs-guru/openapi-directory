import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CurrentWeekFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class CurrentWeekPathParams extends SpeakeasyBase {
    format: CurrentWeekFormatEnum;
}
export declare class CurrentWeekRequest extends SpeakeasyBase {
    pathParams: CurrentWeekPathParams;
}
export declare class CurrentWeekResponse extends SpeakeasyBase {
    contentType: string;
    currentWeek200ApplicationJsonInteger?: number;
    statusCode: number;
}
