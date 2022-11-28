import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CurrentSeasonFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class CurrentSeasonPathParams extends SpeakeasyBase {
    format: CurrentSeasonFormatEnum;
}
export declare class CurrentSeasonRequest extends SpeakeasyBase {
    pathParams: CurrentSeasonPathParams;
}
export declare class CurrentSeasonResponse extends SpeakeasyBase {
    contentType: string;
    currentSeason200ApplicationJsonInteger?: number;
    statusCode: number;
}
