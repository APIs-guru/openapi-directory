import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Meta13 } from "./meta13";



export class CssTemplateRestApiGet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: Meta13;

  @SpeakeasyMetadata({ data: "json, name=css" })
  css?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=template_name" })
  templateName?: string;
}
