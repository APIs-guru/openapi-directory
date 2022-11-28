import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetP60ReportOutputQueryParams extends SpeakeasyBase {
    employeeCodes?: string;
    employerKey: string;
    maxIndex?: string;
    startIndex?: string;
    taxYear: string;
    transformDefinitionKey?: string;
}
export declare class GetP60ReportOutputHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetP60ReportOutputRequest extends SpeakeasyBase {
    queryParams: GetP60ReportOutputQueryParams;
    headers: GetP60ReportOutputHeaders;
}
export declare class GetP60ReportOutputResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    getP60ReportOutput200ApplicationJsonBinaryString?: Uint8Array;
    statusCode: number;
}
