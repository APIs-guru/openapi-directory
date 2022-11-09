import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetEmployeesFromPayRunPathParams extends SpeakeasyBase {
    employerId: string;
    payRunId: string;
    payScheduleId: string;
}
export declare class GetEmployeesFromPayRunHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetEmployeesFromPayRunRequest extends SpeakeasyBase {
    pathParams: GetEmployeesFromPayRunPathParams;
    headers: GetEmployeesFromPayRunHeaders;
}
export declare class GetEmployeesFromPayRunResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
