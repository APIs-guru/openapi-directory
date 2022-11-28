import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchNetworkAccessProfileServerList: readonly ["https://supersim.twilio.com"];
export declare class FetchNetworkAccessProfilePathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchNetworkAccessProfileSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchNetworkAccessProfileRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchNetworkAccessProfilePathParams;
    security: FetchNetworkAccessProfileSecurity;
}
export declare class FetchNetworkAccessProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    supersimV1NetworkAccessProfile?: shared.SupersimV1NetworkAccessProfile;
}
