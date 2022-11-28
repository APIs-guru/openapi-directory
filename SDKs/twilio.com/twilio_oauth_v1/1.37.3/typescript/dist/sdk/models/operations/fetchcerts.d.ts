import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchCertsServerList: readonly ["https://oauth.twilio.com"];
export declare class FetchCertsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchCertsRequest extends SpeakeasyBase {
    serverUrl?: string;
    security: FetchCertsSecurity;
}
export declare class FetchCertsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    oauthV1Certs?: shared.OauthV1Certs;
}
