import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAllThirdPartyTransactionsWithTagPathParams extends SpeakeasyBase {
    employerId: string;
    tagId: string;
}
export declare class GetAllThirdPartyTransactionsWithTagHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetAllThirdPartyTransactionsWithTagRequest extends SpeakeasyBase {
    pathParams: GetAllThirdPartyTransactionsWithTagPathParams;
    headers: GetAllThirdPartyTransactionsWithTagHeaders;
}
export declare class GetAllThirdPartyTransactionsWithTagResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
