import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetHolidayBalanceReportOutputQueryParams extends SpeakeasyBase {
    employeeCodes?: string;
    employerKey: string;
    holidayYearEnd: Date;
    maxIndex?: string;
    startIndex?: string;
}
export declare class GetHolidayBalanceReportOutputHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetHolidayBalanceReportOutputRequest extends SpeakeasyBase {
    queryParams: GetHolidayBalanceReportOutputQueryParams;
    headers: GetHolidayBalanceReportOutputHeaders;
}
export declare class GetHolidayBalanceReportOutputResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    getHolidayBalanceReportOutput200ApplicationJsonBinaryString?: Uint8Array;
    statusCode: number;
}
