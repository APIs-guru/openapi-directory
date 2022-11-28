import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMyViewedListingsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetMyViewedListingsRequest extends SpeakeasyBase {
    security: GetMyViewedListingsSecurity;
}
export declare class GetMyViewedListingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
