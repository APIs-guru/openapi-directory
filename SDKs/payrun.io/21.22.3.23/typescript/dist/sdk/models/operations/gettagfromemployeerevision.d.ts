import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetTagFromEmployeeRevisionPathParams extends SpeakeasyBase {
    effectiveDate: Date;
    employeeId: string;
    employerId: string;
    tagId: string;
}
export declare class GetTagFromEmployeeRevisionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetTagFromEmployeeRevisionRequest extends SpeakeasyBase {
    pathParams: GetTagFromEmployeeRevisionPathParams;
    headers: GetTagFromEmployeeRevisionHeaders;
}
export declare class GetTagFromEmployeeRevisionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    tag?: shared.Tag;
}
