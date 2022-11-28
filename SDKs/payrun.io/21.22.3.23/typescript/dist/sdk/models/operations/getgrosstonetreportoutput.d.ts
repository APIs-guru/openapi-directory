import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGrossToNetReportOutputQueryParams extends SpeakeasyBase {
    employerKey: string;
    maxIndex?: string;
    payScheduleKey: string;
    startIndex?: string;
    taxPeriod?: string;
    taxYear: string;
}
export declare class GetGrossToNetReportOutputHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetGrossToNetReportOutputRequest extends SpeakeasyBase {
    queryParams: GetGrossToNetReportOutputQueryParams;
    headers: GetGrossToNetReportOutputHeaders;
}
export declare class GetGrossToNetReportOutputResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    getGrossToNetReportOutput200ApplicationJsonBinaryString?: Uint8Array;
    statusCode: number;
}
