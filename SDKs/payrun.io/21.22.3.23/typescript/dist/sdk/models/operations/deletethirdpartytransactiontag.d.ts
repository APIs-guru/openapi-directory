import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteThirdPartyTransactionTagPathParams extends SpeakeasyBase {
    employerId: string;
    tagId: string;
    thirdPartyTransactionId: string;
}
export declare class DeleteThirdPartyTransactionTagHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeleteThirdPartyTransactionTagRequest extends SpeakeasyBase {
    pathParams: DeleteThirdPartyTransactionTagPathParams;
    headers: DeleteThirdPartyTransactionTagHeaders;
}
export declare class DeleteThirdPartyTransactionTagResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
