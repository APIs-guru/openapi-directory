import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTagsFromEmployeeRevisionPathParams extends SpeakeasyBase {
    effectiveDate: Date;
    employeeId: string;
    employerId: string;
}
export declare class GetTagsFromEmployeeRevisionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetTagsFromEmployeeRevisionRequest extends SpeakeasyBase {
    pathParams: GetTagsFromEmployeeRevisionPathParams;
    headers: GetTagsFromEmployeeRevisionHeaders;
}
export declare class GetTagsFromEmployeeRevisionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
