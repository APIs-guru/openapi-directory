import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetActivePayInstructionsReportOutputQueryParams extends SpeakeasyBase {
    activeOn?: Date;
    employeeKey: string;
    employerKey: string;
    fromDate: Date;
    toDate?: Date;
    type?: string;
}
export declare class GetActivePayInstructionsReportOutputHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetActivePayInstructionsReportOutputRequest extends SpeakeasyBase {
    queryParams: GetActivePayInstructionsReportOutputQueryParams;
    headers: GetActivePayInstructionsReportOutputHeaders;
}
export declare class GetActivePayInstructionsReportOutputResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    getActivePayInstructionsReportOutput200ApplicationJsonBinaryString?: Uint8Array;
    statusCode: number;
}
