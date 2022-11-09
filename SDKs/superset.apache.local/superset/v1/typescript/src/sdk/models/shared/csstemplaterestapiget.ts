import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Meta13 } from "./meta13";


export class CssTemplateRestApiGet extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_by" })
  createdBy?: Meta13;

  @Metadata({ data: "json, name=css" })
  css?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=template_name" })
  templateName?: string;
}
