import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteEmployeeTagPathParams extends SpeakeasyBase {
    employeeId: string;
    employerId: string;
    tagId: string;
}
export declare class DeleteEmployeeTagHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeleteEmployeeTagRequest extends SpeakeasyBase {
    pathParams: DeleteEmployeeTagPathParams;
    headers: DeleteEmployeeTagHeaders;
}
export declare class DeleteEmployeeTagResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
