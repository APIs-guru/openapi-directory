import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Meta12 } from "./meta12";
import { Meta11 } from "./meta11";


export class CssTemplateRestApiGetList extends SpeakeasyBase {
  @Metadata({ data: "json, name=changed_by" })
  changedBy?: Meta12;

  @Metadata({ data: "json, name=changed_on_delta_humanized" })
  changedOnDeltaHumanized?: any;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: Meta11;

  @Metadata({ data: "json, name=created_on" })
  createdOn?: Date;

  @Metadata({ data: "json, name=css" })
  css?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=template_name" })
  templateName?: string;
}
