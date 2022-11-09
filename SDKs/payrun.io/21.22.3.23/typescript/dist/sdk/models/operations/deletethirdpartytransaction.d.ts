import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteThirdPartyTransactionPathParams extends SpeakeasyBase {
    employerId: string;
    thirdPartyTransactionId: string;
}
export declare class DeleteThirdPartyTransactionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeleteThirdPartyTransactionRequest extends SpeakeasyBase {
    pathParams: DeleteThirdPartyTransactionPathParams;
    headers: DeleteThirdPartyTransactionHeaders;
}
export declare class DeleteThirdPartyTransactionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
