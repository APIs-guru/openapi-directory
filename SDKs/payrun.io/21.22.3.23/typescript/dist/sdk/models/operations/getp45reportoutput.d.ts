import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetP45ReportOutputQueryParams extends SpeakeasyBase {
    employeeKey: string;
    employerKey: string;
    transformDefinitionKey?: string;
}
export declare class GetP45ReportOutputHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetP45ReportOutputRequest extends SpeakeasyBase {
    queryParams: GetP45ReportOutputQueryParams;
    headers: GetP45ReportOutputHeaders;
}
export declare class GetP45ReportOutputResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    getP45ReportOutput200ApplicationJsonBinaryString?: Uint8Array;
    statusCode: number;
}
