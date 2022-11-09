import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeletePayRunEmployeePathParams extends SpeakeasyBase {
    employeeId: string;
    employerId: string;
    payRunId: string;
    payScheduleId: string;
}
export declare class DeletePayRunEmployeeHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeletePayRunEmployeeRequest extends SpeakeasyBase {
    pathParams: DeletePayRunEmployeePathParams;
    headers: DeletePayRunEmployeeHeaders;
}
export declare class DeletePayRunEmployeeResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
