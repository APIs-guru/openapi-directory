import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IncomeVerificationDocumentsDownloadRequest
/** 
 * IncomeVerificationDocumentsDownloadRequest defines the request schema for `/income/verification/documents/download`.
**/
export class IncomeVerificationDocumentsDownloadRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=income_verification_id" })
  incomeVerificationId: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
