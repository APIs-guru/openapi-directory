import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearPathParams extends SpeakeasyBase {
    companyId: string;
    employeeId: string;
    year: string;
}
export declare class GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearQueryParams extends SpeakeasyBase {
    dettypes?: string;
    includetotalcount?: boolean;
    pagenumber?: number;
    pagesize?: number;
}
export declare class GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearSecurity extends SpeakeasyBase {
    paylocityAuth: shared.SchemePaylocityAuth;
}
export declare class GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearRequest extends SpeakeasyBase {
    pathParams: GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearPathParams;
    queryParams: GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearQueryParams;
    security: GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearSecurity;
}
export declare class GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errors?: shared.Error[];
    payStatementSummaries?: shared.PayStatementSummary[];
}
