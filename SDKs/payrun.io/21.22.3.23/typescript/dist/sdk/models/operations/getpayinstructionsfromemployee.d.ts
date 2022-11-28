import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPayInstructionsFromEmployeePathParams extends SpeakeasyBase {
    employeeId: string;
    employerId: string;
}
export declare class GetPayInstructionsFromEmployeeHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetPayInstructionsFromEmployeeRequest extends SpeakeasyBase {
    pathParams: GetPayInstructionsFromEmployeePathParams;
    headers: GetPayInstructionsFromEmployeeHeaders;
}
export declare class GetPayInstructionsFromEmployeeResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
