import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AttachmentViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileSizeBytes" })
  fileSizeBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=fileType" })
  fileType?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
