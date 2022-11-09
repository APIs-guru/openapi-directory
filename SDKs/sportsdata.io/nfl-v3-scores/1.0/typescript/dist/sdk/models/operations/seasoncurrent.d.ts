import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum SeasonCurrentFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class SeasonCurrentPathParams extends SpeakeasyBase {
    format: SeasonCurrentFormatEnum;
}
export declare class SeasonCurrentRequest extends SpeakeasyBase {
    pathParams: SeasonCurrentPathParams;
}
export declare class SeasonCurrentResponse extends SpeakeasyBase {
    contentType: string;
    seasonCurrent200ApplicationJsonInteger?: number;
    statusCode: number;
}
