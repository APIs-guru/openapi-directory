import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdatePayslipPathParams extends SpeakeasyBase {
    payslipId: string;
}
export declare class UpdatePayslipHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class UpdatePayslipSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class UpdatePayslipRequest extends SpeakeasyBase {
    pathParams: UpdatePayslipPathParams;
    headers: UpdatePayslipHeaders;
    request?: shared.PayslipLines[];
    security: UpdatePayslipSecurity;
}
export declare class UpdatePayslipResponse extends SpeakeasyBase {
    contentType: string;
    payslips?: shared.Payslips;
    statusCode: number;
}
