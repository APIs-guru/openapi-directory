import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNetPayReportOutputQueryParams extends SpeakeasyBase {
    employerKey: string;
    maxIndex?: string;
    payScheduleKey: string;
    startIndex?: string;
    taxPeriod?: string;
    taxYear: string;
}
export declare class GetNetPayReportOutputHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetNetPayReportOutputRequest extends SpeakeasyBase {
    queryParams: GetNetPayReportOutputQueryParams;
    headers: GetNetPayReportOutputHeaders;
}
export declare class GetNetPayReportOutputResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    getNetPayReportOutput200ApplicationJsonBinaryString?: Uint8Array;
    statusCode: number;
}
