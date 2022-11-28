import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ByeWeeksFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class ByeWeeksPathParams extends SpeakeasyBase {
    format: ByeWeeksFormatEnum;
    season: string;
}
export declare class ByeWeeksRequest extends SpeakeasyBase {
    pathParams: ByeWeeksPathParams;
}
export declare class ByeWeeksResponse extends SpeakeasyBase {
    byes?: any[];
    contentType: string;
    statusCode: number;
}
