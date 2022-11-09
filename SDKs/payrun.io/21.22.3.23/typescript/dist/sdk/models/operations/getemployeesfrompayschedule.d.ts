import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetEmployeesFromPaySchedulePathParams extends SpeakeasyBase {
    employerId: string;
    payScheduleId: string;
}
export declare class GetEmployeesFromPayScheduleHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetEmployeesFromPayScheduleRequest extends SpeakeasyBase {
    pathParams: GetEmployeesFromPaySchedulePathParams;
    headers: GetEmployeesFromPayScheduleHeaders;
}
export declare class GetEmployeesFromPayScheduleResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
