import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SeriesFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class SeriesPathParams extends SpeakeasyBase {
    format: SeriesFormatEnum;
}
export declare class SeriesRequest extends SpeakeasyBase {
    pathParams: SeriesPathParams;
}
export declare class SeriesResponse extends SpeakeasyBase {
    contentType: string;
    series?: any[];
    statusCode: number;
}
