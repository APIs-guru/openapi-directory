import { SpeakeasyBase } from "../../../internal/utils";
export declare enum InjuriesHistoricalFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class InjuriesHistoricalPathParams extends SpeakeasyBase {
    format: InjuriesHistoricalFormatEnum;
}
export declare class InjuriesHistoricalRequest extends SpeakeasyBase {
    pathParams: InjuriesHistoricalPathParams;
}
export declare class InjuriesHistoricalResponse extends SpeakeasyBase {
    contentType: string;
    injuries?: any[];
    statusCode: number;
}
