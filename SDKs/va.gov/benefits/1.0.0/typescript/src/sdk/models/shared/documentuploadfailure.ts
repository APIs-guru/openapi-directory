import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DocumentUploadFailure
/** 
 * Document upload failed
**/
export class DocumentUploadFailure extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: string;

  @SpeakeasyMetadata()
  message?: string;
}
