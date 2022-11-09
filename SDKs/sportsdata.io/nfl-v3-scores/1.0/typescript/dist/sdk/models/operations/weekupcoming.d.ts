import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum WeekUpcomingFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class WeekUpcomingPathParams extends SpeakeasyBase {
    format: WeekUpcomingFormatEnum;
}
export declare class WeekUpcomingRequest extends SpeakeasyBase {
    pathParams: WeekUpcomingPathParams;
}
export declare class WeekUpcomingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    weekUpcoming200ApplicationJsonInteger?: number;
}
