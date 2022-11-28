import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CssTemplateRestApiPut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=css" })
  css?: string;

  @SpeakeasyMetadata({ data: "json, name=template_name" })
  templateName?: string;
}
