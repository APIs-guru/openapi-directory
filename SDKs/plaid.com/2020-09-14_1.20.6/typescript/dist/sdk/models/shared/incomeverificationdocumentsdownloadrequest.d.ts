import { SpeakeasyBase } from "../../../internal/utils";
/**
 * IncomeVerificationDocumentsDownloadRequest defines the request schema for `/income/verification/documents/download`.
**/
export declare class IncomeVerificationDocumentsDownloadRequest extends SpeakeasyBase {
    clientId?: string;
    incomeVerificationId: string;
    secret?: string;
}
