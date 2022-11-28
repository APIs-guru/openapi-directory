import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSuperfundPathParams extends SpeakeasyBase {
    superFundId: string;
}
export declare class GetSuperfundHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class GetSuperfundSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetSuperfundRequest extends SpeakeasyBase {
    pathParams: GetSuperfundPathParams;
    headers: GetSuperfundHeaders;
    security: GetSuperfundSecurity;
}
export declare class GetSuperfundResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    superFunds?: shared.SuperFunds;
}
