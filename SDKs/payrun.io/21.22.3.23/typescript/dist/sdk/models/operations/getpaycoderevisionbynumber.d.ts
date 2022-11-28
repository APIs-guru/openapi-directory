import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPayCodeRevisionByNumberPathParams extends SpeakeasyBase {
    employerId: string;
    payCodeId: string;
    revisionNumber: string;
}
export declare class GetPayCodeRevisionByNumberHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetPayCodeRevisionByNumberRequest extends SpeakeasyBase {
    pathParams: GetPayCodeRevisionByNumberPathParams;
    headers: GetPayCodeRevisionByNumberHeaders;
}
export declare class GetPayCodeRevisionByNumberResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    payCode?: shared.PayCode;
    statusCode: number;
}
