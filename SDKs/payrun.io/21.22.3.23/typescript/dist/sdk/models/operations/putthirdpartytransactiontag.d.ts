import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutThirdPartyTransactionTagPathParams extends SpeakeasyBase {
    employerId: string;
    tagId: string;
    thirdPartyTransactionId: string;
}
export declare class PutThirdPartyTransactionTagHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PutThirdPartyTransactionTagRequest extends SpeakeasyBase {
    pathParams: PutThirdPartyTransactionTagPathParams;
    headers: PutThirdPartyTransactionTagHeaders;
}
export declare class PutThirdPartyTransactionTagResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    tag?: shared.Tag;
}
