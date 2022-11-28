import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEarningByEarningCodeAndStartDatePathParams extends SpeakeasyBase {
    companyId: string;
    earningCode: string;
    employeeId: string;
    startDate: string;
}
export declare class GetEarningByEarningCodeAndStartDateSecurity extends SpeakeasyBase {
    paylocityAuth: shared.SchemePaylocityAuth;
}
export declare class GetEarningByEarningCodeAndStartDateRequest extends SpeakeasyBase {
    pathParams: GetEarningByEarningCodeAndStartDatePathParams;
    security: GetEarningByEarningCodeAndStartDateSecurity;
}
export declare class GetEarningByEarningCodeAndStartDateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    earning?: shared.Earning;
    errors?: shared.Error[];
}
