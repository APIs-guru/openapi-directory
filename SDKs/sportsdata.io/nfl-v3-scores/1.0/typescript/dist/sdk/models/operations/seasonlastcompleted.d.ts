import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SeasonLastCompletedFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class SeasonLastCompletedPathParams extends SpeakeasyBase {
    format: SeasonLastCompletedFormatEnum;
}
export declare class SeasonLastCompletedRequest extends SpeakeasyBase {
    pathParams: SeasonLastCompletedPathParams;
}
export declare class SeasonLastCompletedResponse extends SpeakeasyBase {
    contentType: string;
    seasonLastCompleted200ApplicationJsonInteger?: number;
    statusCode: number;
}
