import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetEmployeeRevisionsPathParams extends SpeakeasyBase {
    employeeId: string;
    employerId: string;
}
export declare class GetEmployeeRevisionsHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetEmployeeRevisionsRequest extends SpeakeasyBase {
    pathParams: GetEmployeeRevisionsPathParams;
    headers: GetEmployeeRevisionsHeaders;
}
export declare class GetEmployeeRevisionsResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
