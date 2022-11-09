import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AttachmentViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=fileSizeBytes" })
  fileSizeBytes?: number;

  @Metadata({ data: "json, name=fileType" })
  fileType?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
