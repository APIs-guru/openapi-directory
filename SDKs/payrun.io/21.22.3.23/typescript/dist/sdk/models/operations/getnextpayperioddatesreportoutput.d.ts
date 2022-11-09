import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetNextPayPeriodDatesReportOutputQueryParams extends SpeakeasyBase {
    employerKey: string;
    payScheduleKey: string;
}
export declare class GetNextPayPeriodDatesReportOutputHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetNextPayPeriodDatesReportOutputRequest extends SpeakeasyBase {
    queryParams: GetNextPayPeriodDatesReportOutputQueryParams;
    headers: GetNextPayPeriodDatesReportOutputHeaders;
}
export declare class GetNextPayPeriodDatesReportOutputResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    getNextPayPeriodDatesReportOutput200ApplicationJsonBinaryString?: Uint8Array;
    statusCode: number;
}
