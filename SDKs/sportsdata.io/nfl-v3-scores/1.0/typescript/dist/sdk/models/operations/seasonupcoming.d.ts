import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SeasonUpcomingFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class SeasonUpcomingPathParams extends SpeakeasyBase {
    format: SeasonUpcomingFormatEnum;
}
export declare class SeasonUpcomingRequest extends SpeakeasyBase {
    pathParams: SeasonUpcomingPathParams;
}
export declare class SeasonUpcomingResponse extends SpeakeasyBase {
    contentType: string;
    seasonUpcoming200ApplicationJsonInteger?: number;
    statusCode: number;
}
