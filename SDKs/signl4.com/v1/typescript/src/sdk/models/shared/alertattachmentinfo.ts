import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AlertAttachmentInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentType" })
  contentType?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
