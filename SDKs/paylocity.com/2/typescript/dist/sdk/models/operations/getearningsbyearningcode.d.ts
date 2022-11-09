import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetEarningsByEarningCodePathParams extends SpeakeasyBase {
    companyId: string;
    earningCode: string;
    employeeId: string;
}
export declare class GetEarningsByEarningCodeSecurity extends SpeakeasyBase {
    paylocityAuth: shared.SchemePaylocityAuth;
}
export declare class GetEarningsByEarningCodeRequest extends SpeakeasyBase {
    pathParams: GetEarningsByEarningCodePathParams;
    security: GetEarningsByEarningCodeSecurity;
}
export declare class GetEarningsByEarningCodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    earnings?: shared.Earning[];
    errors?: shared.Error[];
}
