import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SchedulePathParams extends SpeakeasyBase {
    format: string;
    season: string;
}
export declare class ScheduleRequest extends SpeakeasyBase {
    pathParams: SchedulePathParams;
}
export declare class ScheduleResponse extends SpeakeasyBase {
    contentType: string;
    schedules?: any[];
    statusCode: number;
}
