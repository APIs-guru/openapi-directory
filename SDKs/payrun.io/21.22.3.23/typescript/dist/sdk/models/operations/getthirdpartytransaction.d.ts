import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetThirdPartyTransactionPathParams extends SpeakeasyBase {
    employerId: string;
    thirdPartyTransactionId: string;
}
export declare class GetThirdPartyTransactionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetThirdPartyTransactionRequest extends SpeakeasyBase {
    pathParams: GetThirdPartyTransactionPathParams;
    headers: GetThirdPartyTransactionHeaders;
}
export declare class GetThirdPartyTransactionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    thirdPartyTransaction?: any;
}
