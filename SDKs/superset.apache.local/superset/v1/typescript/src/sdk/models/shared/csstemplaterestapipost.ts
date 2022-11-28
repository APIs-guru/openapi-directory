import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CssTemplateRestApiPost extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=css" })
  css?: string;

  @SpeakeasyMetadata({ data: "json, name=template_name" })
  templateName?: string;
}
