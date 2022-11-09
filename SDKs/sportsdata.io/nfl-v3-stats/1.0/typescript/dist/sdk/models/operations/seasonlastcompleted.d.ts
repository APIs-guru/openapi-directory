import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SeasonLastCompletedPathParams extends SpeakeasyBase {
    format: string;
}
export declare class SeasonLastCompletedRequest extends SpeakeasyBase {
    pathParams: SeasonLastCompletedPathParams;
}
export declare class SeasonLastCompletedResponse extends SpeakeasyBase {
    contentType: string;
    seasonLastCompleted200ApplicationJsonInteger?: number;
    statusCode: number;
}
