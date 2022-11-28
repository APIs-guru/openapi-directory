import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetShopVacationSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetShopVacationRequest extends SpeakeasyBase {
    security: GetShopVacationSecurity;
}
export declare class GetShopVacationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
