import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTagsFromEmployeePathParams extends SpeakeasyBase {
    employeeId: string;
    employerId: string;
}
export declare class GetTagsFromEmployeeHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetTagsFromEmployeeRequest extends SpeakeasyBase {
    pathParams: GetTagsFromEmployeePathParams;
    headers: GetTagsFromEmployeeHeaders;
}
export declare class GetTagsFromEmployeeResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
