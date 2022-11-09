import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetThirdPartyTransactionsPathParams extends SpeakeasyBase {
    employerId: string;
}
export declare class GetThirdPartyTransactionsHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetThirdPartyTransactionsRequest extends SpeakeasyBase {
    pathParams: GetThirdPartyTransactionsPathParams;
    headers: GetThirdPartyTransactionsHeaders;
}
export declare class GetThirdPartyTransactionsResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
