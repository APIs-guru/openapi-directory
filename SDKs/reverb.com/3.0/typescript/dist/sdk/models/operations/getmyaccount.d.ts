import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMyAccountSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetMyAccountRequest extends SpeakeasyBase {
    security: GetMyAccountSecurity;
}
export declare class GetMyAccountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
