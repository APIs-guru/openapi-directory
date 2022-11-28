import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchTrunksServerList: readonly ["https://routes.twilio.com"];
export declare class FetchTrunksPathParams extends SpeakeasyBase {
    sipTrunkDomain: string;
}
export declare class FetchTrunksSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchTrunksRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchTrunksPathParams;
    security: FetchTrunksSecurity;
}
export declare class FetchTrunksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    routesV2Trunks?: shared.RoutesV2Trunks;
}
