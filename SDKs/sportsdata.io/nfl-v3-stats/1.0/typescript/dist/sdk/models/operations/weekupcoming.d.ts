import { SpeakeasyBase } from "../../../internal/utils";
export declare class WeekUpcomingPathParams extends SpeakeasyBase {
    format: string;
}
export declare class WeekUpcomingRequest extends SpeakeasyBase {
    pathParams: WeekUpcomingPathParams;
}
export declare class WeekUpcomingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    weekUpcoming200ApplicationJsonInteger?: number;
}
