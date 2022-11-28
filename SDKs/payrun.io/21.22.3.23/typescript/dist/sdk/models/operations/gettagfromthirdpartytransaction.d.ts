import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTagFromThirdPartyTransactionPathParams extends SpeakeasyBase {
    employerId: string;
    tagId: string;
    thirdPartyTransactionId: string;
}
export declare class GetTagFromThirdPartyTransactionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetTagFromThirdPartyTransactionRequest extends SpeakeasyBase {
    pathParams: GetTagFromThirdPartyTransactionPathParams;
    headers: GetTagFromThirdPartyTransactionHeaders;
}
export declare class GetTagFromThirdPartyTransactionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    tag?: shared.Tag;
}
