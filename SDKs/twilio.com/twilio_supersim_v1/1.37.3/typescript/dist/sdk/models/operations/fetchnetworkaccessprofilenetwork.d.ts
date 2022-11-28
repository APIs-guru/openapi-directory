import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchNetworkAccessProfileNetworkServerList: readonly ["https://supersim.twilio.com"];
export declare class FetchNetworkAccessProfileNetworkPathParams extends SpeakeasyBase {
    networkAccessProfileSid: string;
    sid: string;
}
export declare class FetchNetworkAccessProfileNetworkSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchNetworkAccessProfileNetworkRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchNetworkAccessProfileNetworkPathParams;
    security: FetchNetworkAccessProfileNetworkSecurity;
}
export declare class FetchNetworkAccessProfileNetworkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    supersimV1NetworkAccessProfileNetworkAccessProfileNetwork?: shared.SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork;
}
