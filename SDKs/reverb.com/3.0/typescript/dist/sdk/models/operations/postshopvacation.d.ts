import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostShopVacationSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class PostShopVacationRequest extends SpeakeasyBase {
    security: PostShopVacationSecurity;
}
export declare class PostShopVacationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
