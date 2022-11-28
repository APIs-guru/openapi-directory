import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDatePathParams extends SpeakeasyBase {
    checkDate: string;
    companyId: string;
    employeeId: string;
    year: string;
}
export declare class GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateQueryParams extends SpeakeasyBase {
    dettypes?: string;
    includetotalcount?: boolean;
    pagenumber?: number;
    pagesize?: number;
}
export declare class GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateSecurity extends SpeakeasyBase {
    paylocityAuth: shared.SchemePaylocityAuth;
}
export declare class GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateRequest extends SpeakeasyBase {
    pathParams: GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDatePathParams;
    queryParams: GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateQueryParams;
    security: GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateSecurity;
}
export declare class GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errors?: shared.Error[];
    payStatementDetails?: shared.PayStatementDetails[];
}
