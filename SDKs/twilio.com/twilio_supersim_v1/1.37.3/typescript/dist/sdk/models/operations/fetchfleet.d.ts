import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchFleetServerList: readonly ["https://supersim.twilio.com"];
export declare class FetchFleetPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchFleetSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchFleetRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchFleetPathParams;
    security: FetchFleetSecurity;
}
export declare class FetchFleetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    supersimV1Fleet?: shared.SupersimV1Fleet;
}
