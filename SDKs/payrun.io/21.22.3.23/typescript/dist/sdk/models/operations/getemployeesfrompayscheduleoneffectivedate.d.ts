import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEmployeesFromPayScheduleOnEffectiveDatePathParams extends SpeakeasyBase {
    effectiveDate: Date;
    employerId: string;
    payScheduleId: string;
}
export declare class GetEmployeesFromPayScheduleOnEffectiveDateHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetEmployeesFromPayScheduleOnEffectiveDateRequest extends SpeakeasyBase {
    pathParams: GetEmployeesFromPayScheduleOnEffectiveDatePathParams;
    headers: GetEmployeesFromPayScheduleOnEffectiveDateHeaders;
}
export declare class GetEmployeesFromPayScheduleOnEffectiveDateResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
