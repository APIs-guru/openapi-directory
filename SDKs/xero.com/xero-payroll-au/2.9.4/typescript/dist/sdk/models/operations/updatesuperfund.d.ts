import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateSuperfundPathParams extends SpeakeasyBase {
    superFundId: string;
}
export declare class UpdateSuperfundHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class UpdateSuperfundSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class UpdateSuperfundRequest extends SpeakeasyBase {
    pathParams: UpdateSuperfundPathParams;
    headers: UpdateSuperfundHeaders;
    request?: shared.SuperFundInput[];
    security: UpdateSuperfundSecurity;
}
export declare class UpdateSuperfundResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    superFunds?: shared.SuperFunds;
}
