import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPayslipPathParams extends SpeakeasyBase {
    payslipId: string;
}
export declare class GetPayslipHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class GetPayslipSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetPayslipRequest extends SpeakeasyBase {
    pathParams: GetPayslipPathParams;
    headers: GetPayslipHeaders;
    security: GetPayslipSecurity;
}
export declare class GetPayslipResponse extends SpeakeasyBase {
    contentType: string;
    payslipObject?: shared.PayslipObject;
    statusCode: number;
}
