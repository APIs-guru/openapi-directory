import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPayRunFromPaySchedulePathParams extends SpeakeasyBase {
    employerId: string;
    payRunId: string;
    payScheduleId: string;
}
export declare class GetPayRunFromPayScheduleHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetPayRunFromPayScheduleRequest extends SpeakeasyBase {
    pathParams: GetPayRunFromPaySchedulePathParams;
    headers: GetPayRunFromPayScheduleHeaders;
}
export declare class GetPayRunFromPayScheduleResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    payRun?: shared.PayRun;
    statusCode: number;
}
