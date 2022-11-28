import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateSuperfundHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class CreateSuperfundSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class CreateSuperfundRequest extends SpeakeasyBase {
    headers: CreateSuperfundHeaders;
    request: shared.SuperFundInput[];
    security: CreateSuperfundSecurity;
}
export declare class CreateSuperfundResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    superFunds?: shared.SuperFunds;
}
