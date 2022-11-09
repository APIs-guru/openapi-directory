import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum WeekLastCompletedFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class WeekLastCompletedPathParams extends SpeakeasyBase {
    format: WeekLastCompletedFormatEnum;
}
export declare class WeekLastCompletedRequest extends SpeakeasyBase {
    pathParams: WeekLastCompletedPathParams;
}
export declare class WeekLastCompletedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    weekLastCompleted200ApplicationJsonInteger?: number;
}
