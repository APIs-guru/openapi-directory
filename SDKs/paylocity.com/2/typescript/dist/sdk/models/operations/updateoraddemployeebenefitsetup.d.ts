import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateOrAddEmployeeBenefitSetupPathParams extends SpeakeasyBase {
    companyId: string;
    employeeId: string;
}
export declare class UpdateOrAddEmployeeBenefitSetupSecurity extends SpeakeasyBase {
    paylocityAuth: shared.SchemePaylocityAuth;
}
export declare class UpdateOrAddEmployeeBenefitSetupRequest extends SpeakeasyBase {
    pathParams: UpdateOrAddEmployeeBenefitSetupPathParams;
    request: shared.BenefitSetup;
    security: UpdateOrAddEmployeeBenefitSetupSecurity;
}
export declare class UpdateOrAddEmployeeBenefitSetupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errors?: shared.Error[];
}
