import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetP32SummaryNetReportOutputQueryParams extends SpeakeasyBase {
    employerKey: string;
    taxYear: string;
}
export declare class GetP32SummaryNetReportOutputHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetP32SummaryNetReportOutputRequest extends SpeakeasyBase {
    queryParams: GetP32SummaryNetReportOutputQueryParams;
    headers: GetP32SummaryNetReportOutputHeaders;
}
export declare class GetP32SummaryNetReportOutputResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    getP32SummaryNetReportOutput200ApplicationJsonBinaryString?: Uint8Array;
    statusCode: number;
}
