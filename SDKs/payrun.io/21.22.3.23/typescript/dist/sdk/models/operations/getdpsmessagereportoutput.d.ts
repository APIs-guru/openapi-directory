import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetDpsMessageReportOutputQueryParams extends SpeakeasyBase {
    employerKey: string;
    fromDate: Date;
    maxIndex?: string;
    messageStatuses?: string;
    messageTypes?: string;
    startIndex?: string;
    toDate?: Date;
}
export declare class GetDpsMessageReportOutputHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetDpsMessageReportOutputRequest extends SpeakeasyBase {
    queryParams: GetDpsMessageReportOutputQueryParams;
    headers: GetDpsMessageReportOutputHeaders;
}
export declare class GetDpsMessageReportOutputResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    getDpsMessageReportOutput200ApplicationJsonBinaryString?: Uint8Array;
    statusCode: number;
}
