import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetEmployerRevisionByNumberPathParams extends SpeakeasyBase {
    employerId: string;
    revisionNumber: string;
}
export declare class GetEmployerRevisionByNumberHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetEmployerRevisionByNumberRequest extends SpeakeasyBase {
    pathParams: GetEmployerRevisionByNumberPathParams;
    headers: GetEmployerRevisionByNumberHeaders;
}
export declare class GetEmployerRevisionByNumberResponse extends SpeakeasyBase {
    contentType: string;
    employer?: shared.Employer;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
