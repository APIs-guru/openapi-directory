import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteEmployeeRevisionByNumberPathParams extends SpeakeasyBase {
    employeeId: string;
    employerId: string;
    revisionNumber: string;
}
export declare class DeleteEmployeeRevisionByNumberHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeleteEmployeeRevisionByNumberRequest extends SpeakeasyBase {
    pathParams: DeleteEmployeeRevisionByNumberPathParams;
    headers: DeleteEmployeeRevisionByNumberHeaders;
}
export declare class DeleteEmployeeRevisionByNumberResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
