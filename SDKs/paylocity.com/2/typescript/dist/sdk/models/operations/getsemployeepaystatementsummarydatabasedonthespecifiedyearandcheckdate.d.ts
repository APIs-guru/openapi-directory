import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDatePathParams extends SpeakeasyBase {
    checkDate: string;
    companyId: string;
    employeeId: string;
    year: string;
}
export declare class GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateQueryParams extends SpeakeasyBase {
    dettypes?: string;
    includetotalcount?: boolean;
    pagenumber?: number;
    pagesize?: number;
}
export declare class GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateSecurity extends SpeakeasyBase {
    paylocityAuth: shared.SchemePaylocityAuth;
}
export declare class GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateRequest extends SpeakeasyBase {
    pathParams: GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDatePathParams;
    queryParams: GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateQueryParams;
    security: GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateSecurity;
}
export declare class GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errors?: shared.Error[];
    payStatementSummaries?: shared.PayStatementSummary[];
}
