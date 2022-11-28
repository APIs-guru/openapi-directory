import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteShopVacationSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteShopVacationRequest extends SpeakeasyBase {
    security: DeleteShopVacationSecurity;
}
export declare class DeleteShopVacationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
