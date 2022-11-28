import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchSimServerList: readonly ["https://supersim.twilio.com"];
export declare class FetchSimPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchSimSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchSimRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchSimPathParams;
    security: FetchSimSecurity;
}
export declare class FetchSimResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    supersimV1Sim?: shared.SupersimV1Sim;
}
