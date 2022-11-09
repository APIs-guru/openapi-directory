import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteEarningByEarningCodeAndStartDatePathParams extends SpeakeasyBase {
    companyId: string;
    earningCode: string;
    employeeId: string;
    startDate: string;
}
export declare class DeleteEarningByEarningCodeAndStartDateSecurity extends SpeakeasyBase {
    paylocityAuth: shared.SchemePaylocityAuth;
}
export declare class DeleteEarningByEarningCodeAndStartDateRequest extends SpeakeasyBase {
    pathParams: DeleteEarningByEarningCodeAndStartDatePathParams;
    security: DeleteEarningByEarningCodeAndStartDateSecurity;
}
export declare class DeleteEarningByEarningCodeAndStartDateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errors?: shared.Error[];
}
