import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPayRunsFromEmployeePathParams extends SpeakeasyBase {
    employeeId: string;
    employerId: string;
}
export declare class GetPayRunsFromEmployeeHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetPayRunsFromEmployeeRequest extends SpeakeasyBase {
    pathParams: GetPayRunsFromEmployeePathParams;
    headers: GetPayRunsFromEmployeeHeaders;
}
export declare class GetPayRunsFromEmployeeResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
