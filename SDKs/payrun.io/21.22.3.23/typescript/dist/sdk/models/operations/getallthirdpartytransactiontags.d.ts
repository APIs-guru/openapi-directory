import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAllThirdPartyTransactionTagsPathParams extends SpeakeasyBase {
    employerId: string;
}
export declare class GetAllThirdPartyTransactionTagsHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetAllThirdPartyTransactionTagsRequest extends SpeakeasyBase {
    pathParams: GetAllThirdPartyTransactionTagsPathParams;
    headers: GetAllThirdPartyTransactionTagsHeaders;
}
export declare class GetAllThirdPartyTransactionTagsResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
