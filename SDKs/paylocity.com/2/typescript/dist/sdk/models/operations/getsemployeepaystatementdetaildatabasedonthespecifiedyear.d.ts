import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearPathParams extends SpeakeasyBase {
    companyId: string;
    employeeId: string;
    year: string;
}
export declare class GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearQueryParams extends SpeakeasyBase {
    dettypes?: string;
    includetotalcount?: boolean;
    pagenumber?: number;
    pagesize?: number;
}
export declare class GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearSecurity extends SpeakeasyBase {
    paylocityAuth: shared.SchemePaylocityAuth;
}
export declare class GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearRequest extends SpeakeasyBase {
    pathParams: GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearPathParams;
    queryParams: GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearQueryParams;
    security: GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearSecurity;
}
export declare class GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errors?: shared.Error[];
    payStatementDetails?: shared.PayStatementDetails[];
}
