import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeletePayCodeRevisionByNumberPathParams extends SpeakeasyBase {
    employerId: string;
    payCodeId: string;
    revisionNumber: string;
}
export declare class DeletePayCodeRevisionByNumberHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeletePayCodeRevisionByNumberRequest extends SpeakeasyBase {
    pathParams: DeletePayCodeRevisionByNumberPathParams;
    headers: DeletePayCodeRevisionByNumberHeaders;
}
export declare class DeletePayCodeRevisionByNumberResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
