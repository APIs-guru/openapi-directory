import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AlertAttachment extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=contentType" })
  contentType?: string;

  @Metadata({ data: "json, name=encoding" })
  encoding?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
