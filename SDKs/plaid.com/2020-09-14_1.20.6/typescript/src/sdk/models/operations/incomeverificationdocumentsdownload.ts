import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IncomeVerificationDocumentsDownloadRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.IncomeVerificationDocumentsDownloadRequest;
}


export class IncomeVerificationDocumentsDownloadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  incomeVerificationDocumentsDownload200ApplicationZipBinaryString?: Uint8Array;
}
