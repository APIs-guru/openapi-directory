import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAllDirectDepositPathParams extends SpeakeasyBase {
    companyId: string;
    employeeId: string;
}
export declare class GetAllDirectDepositSecurity extends SpeakeasyBase {
    paylocityAuth: shared.SchemePaylocityAuth;
}
export declare class GetAllDirectDepositRequest extends SpeakeasyBase {
    pathParams: GetAllDirectDepositPathParams;
    security: GetAllDirectDepositSecurity;
}
export declare class GetAllDirectDepositResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    directDeposits?: shared.DirectDeposit[];
    errors?: shared.Error[];
}
