import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutPaySchedulePathParams extends SpeakeasyBase {
    employerId: string;
    payScheduleId: string;
}
export declare class PutPayScheduleHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PutPayScheduleRequest extends SpeakeasyBase {
    pathParams: PutPaySchedulePathParams;
    headers: PutPayScheduleHeaders;
    request: shared.PaySchedule;
}
export declare class PutPayScheduleResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    paySchedule?: shared.PaySchedule;
    statusCode: number;
}
