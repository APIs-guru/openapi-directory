import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetPensionLiabilityReportOutputQueryParams extends SpeakeasyBase {
    employerKey: string;
    pensionKey: string;
    taxYear: string;
}
export declare class GetPensionLiabilityReportOutputHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetPensionLiabilityReportOutputRequest extends SpeakeasyBase {
    queryParams: GetPensionLiabilityReportOutputQueryParams;
    headers: GetPensionLiabilityReportOutputHeaders;
}
export declare class GetPensionLiabilityReportOutputResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    getPensionLiabilityReportOutput200ApplicationJsonBinaryString?: Uint8Array;
    statusCode: number;
}
