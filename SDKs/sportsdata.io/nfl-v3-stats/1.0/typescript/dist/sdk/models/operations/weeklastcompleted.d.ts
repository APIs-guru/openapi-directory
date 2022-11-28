import { SpeakeasyBase } from "../../../internal/utils";
export declare class WeekLastCompletedPathParams extends SpeakeasyBase {
    format: string;
}
export declare class WeekLastCompletedRequest extends SpeakeasyBase {
    pathParams: WeekLastCompletedPathParams;
}
export declare class WeekLastCompletedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    weekLastCompleted200ApplicationJsonInteger?: number;
}
