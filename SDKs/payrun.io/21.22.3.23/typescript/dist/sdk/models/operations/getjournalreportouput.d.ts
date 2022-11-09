import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetJournalReportOuputQueryParams extends SpeakeasyBase {
    employerKey: string;
    ledgerTarget: string;
    payFrequency: string;
    taxPeriod?: string;
    taxYear: string;
}
export declare class GetJournalReportOuputHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetJournalReportOuputRequest extends SpeakeasyBase {
    queryParams: GetJournalReportOuputQueryParams;
    headers: GetJournalReportOuputHeaders;
}
export declare class GetJournalReportOuputResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    getJournalReportOuput200ApplicationJsonBinaryString?: Uint8Array;
    statusCode: number;
}
