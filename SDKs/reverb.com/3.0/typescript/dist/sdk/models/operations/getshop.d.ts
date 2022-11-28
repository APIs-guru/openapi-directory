import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetShopSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetShopRequest extends SpeakeasyBase {
    security: GetShopSecurity;
}
export declare class GetShopResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
