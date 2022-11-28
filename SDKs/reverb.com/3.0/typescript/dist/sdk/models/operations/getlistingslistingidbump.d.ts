import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetListingsListingIdBumpPathParams extends SpeakeasyBase {
    listingId: string;
}
export declare class GetListingsListingIdBumpSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetListingsListingIdBumpRequest extends SpeakeasyBase {
    pathParams: GetListingsListingIdBumpPathParams;
    security: GetListingsListingIdBumpSecurity;
}
export declare class GetListingsListingIdBumpResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
