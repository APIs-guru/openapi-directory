import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTagFromEmployeePathParams extends SpeakeasyBase {
    employeeId: string;
    employerId: string;
    tagId: string;
}
export declare class GetTagFromEmployeeHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetTagFromEmployeeRequest extends SpeakeasyBase {
    pathParams: GetTagFromEmployeePathParams;
    headers: GetTagFromEmployeeHeaders;
}
export declare class GetTagFromEmployeeResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    tag?: shared.Tag;
}
