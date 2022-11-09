import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum CurrentSeasonDetailsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class CurrentSeasonDetailsPathParams extends SpeakeasyBase {
    format: CurrentSeasonDetailsFormatEnum;
}
export declare class CurrentSeasonDetailsRequest extends SpeakeasyBase {
    pathParams: CurrentSeasonDetailsPathParams;
}
export declare class CurrentSeasonDetailsResponse extends SpeakeasyBase {
    contentType: string;
    season?: any;
    statusCode: number;
}
