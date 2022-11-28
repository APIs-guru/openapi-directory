import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IncomeVerificationDocumentsDownloadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.IncomeVerificationDocumentsDownloadRequest;
}


export class IncomeVerificationDocumentsDownloadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  incomeVerificationDocumentsDownload200ApplicationZipBinaryString?: Uint8Array;
}
