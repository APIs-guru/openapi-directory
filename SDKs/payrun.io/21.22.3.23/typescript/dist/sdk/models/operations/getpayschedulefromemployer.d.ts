import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetPayScheduleFromEmployerPathParams extends SpeakeasyBase {
    employerId: string;
    payScheduleId: string;
}
export declare class GetPayScheduleFromEmployerHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetPayScheduleFromEmployerRequest extends SpeakeasyBase {
    pathParams: GetPayScheduleFromEmployerPathParams;
    headers: GetPayScheduleFromEmployerHeaders;
}
export declare class GetPayScheduleFromEmployerResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    paySchedule?: shared.PaySchedule;
    statusCode: number;
}
