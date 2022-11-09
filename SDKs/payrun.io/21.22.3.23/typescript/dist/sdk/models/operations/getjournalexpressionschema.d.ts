import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetJournalExpressionSchemaHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetJournalExpressionSchemaRequest extends SpeakeasyBase {
    headers: GetJournalExpressionSchemaHeaders;
}
export declare class GetJournalExpressionSchemaResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    journalExpressionDataTable?: any;
    statusCode: number;
}
