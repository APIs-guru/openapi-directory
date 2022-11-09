import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CssTemplateRestApiPost extends SpeakeasyBase {
  @Metadata({ data: "json, name=css" })
  css?: string;

  @Metadata({ data: "json, name=template_name" })
  templateName?: string;
}
