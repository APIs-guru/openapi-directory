import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteEmployeeRevisionPathParams extends SpeakeasyBase {
    effectiveDate: Date;
    employeeId: string;
    employerId: string;
}
export declare class DeleteEmployeeRevisionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeleteEmployeeRevisionRequest extends SpeakeasyBase {
    pathParams: DeleteEmployeeRevisionPathParams;
    headers: DeleteEmployeeRevisionHeaders;
}
export declare class DeleteEmployeeRevisionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
