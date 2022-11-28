import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteEmployeePathParams extends SpeakeasyBase {
    employeeId: string;
    employerId: string;
}
export declare class DeleteEmployeeHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeleteEmployeeRequest extends SpeakeasyBase {
    pathParams: DeleteEmployeePathParams;
    headers: DeleteEmployeeHeaders;
}
export declare class DeleteEmployeeResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
