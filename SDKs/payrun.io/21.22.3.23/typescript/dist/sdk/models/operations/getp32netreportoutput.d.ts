import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetP32NetReportOutputQueryParams extends SpeakeasyBase {
    employerKey: string;
    taxYear: string;
}
export declare class GetP32NetReportOutputHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetP32NetReportOutputRequest extends SpeakeasyBase {
    queryParams: GetP32NetReportOutputQueryParams;
    headers: GetP32NetReportOutputHeaders;
}
export declare class GetP32NetReportOutputResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    getP32NetReportOutput200ApplicationJsonBinaryString?: Uint8Array;
    statusCode: number;
}
