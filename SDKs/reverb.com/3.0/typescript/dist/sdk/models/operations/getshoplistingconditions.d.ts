import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetShopListingConditionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetShopListingConditionsRequest extends SpeakeasyBase {
    security: GetShopListingConditionsSecurity;
}
export declare class GetShopListingConditionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
