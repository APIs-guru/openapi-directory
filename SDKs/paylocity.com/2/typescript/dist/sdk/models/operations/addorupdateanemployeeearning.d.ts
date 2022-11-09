import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AddOrUpdateAnEmployeeEarningPathParams extends SpeakeasyBase {
    companyId: string;
    employeeId: string;
}
export declare class AddOrUpdateAnEmployeeEarningSecurity extends SpeakeasyBase {
    paylocityAuth: shared.SchemePaylocityAuth;
}
export declare class AddOrUpdateAnEmployeeEarningRequest extends SpeakeasyBase {
    pathParams: AddOrUpdateAnEmployeeEarningPathParams;
    request: shared.Earning;
    security: AddOrUpdateAnEmployeeEarningSecurity;
}
export declare class AddOrUpdateAnEmployeeEarningResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errors?: shared.Error[];
}
