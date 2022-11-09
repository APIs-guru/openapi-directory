import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetReportOutputPathParams extends SpeakeasyBase {
    reportDefinitionId: string;
}
export declare class GetReportOutputHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetReportOutputRequest extends SpeakeasyBase {
    pathParams: GetReportOutputPathParams;
    headers: GetReportOutputHeaders;
}
export declare class GetReportOutputResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    getReportOutput200ApplicationJsonBinaryString?: Uint8Array;
    statusCode: number;
}
