import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHTRUNKINGNUMBER_SERVERS: string[];
export declare class FetchTrunkingNumberPathParams extends SpeakeasyBase {
    destinationNumber: string;
}
export declare class FetchTrunkingNumberQueryParams extends SpeakeasyBase {
    originationNumber?: string;
}
export declare class FetchTrunkingNumberSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchTrunkingNumberRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchTrunkingNumberPathParams;
    queryParams: FetchTrunkingNumberQueryParams;
    security: FetchTrunkingNumberSecurity;
}
export declare class FetchTrunkingNumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    pricingV2TrunkingNumber?: shared.PricingV2TrunkingNumber;
}
