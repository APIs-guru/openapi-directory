import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTagsFromThirdPartyTransactionPathParams extends SpeakeasyBase {
    employerId: string;
    thirdPartyTransactionId: string;
}
export declare class GetTagsFromThirdPartyTransactionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetTagsFromThirdPartyTransactionRequest extends SpeakeasyBase {
    pathParams: GetTagsFromThirdPartyTransactionPathParams;
    headers: GetTagsFromThirdPartyTransactionHeaders;
}
export declare class GetTagsFromThirdPartyTransactionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
