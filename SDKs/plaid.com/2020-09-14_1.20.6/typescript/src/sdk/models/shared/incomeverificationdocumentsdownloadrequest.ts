import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IncomeVerificationDocumentsDownloadRequest
/** 
 * IncomeVerificationDocumentsDownloadRequest defines the request schema for `/income/verification/documents/download`.
**/
export class IncomeVerificationDocumentsDownloadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=income_verification_id" })
  incomeVerificationId: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
