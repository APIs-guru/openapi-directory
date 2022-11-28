import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Meta12 } from "./meta12";
import { Meta11 } from "./meta11";



export class CssTemplateRestApiGetList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changed_by" })
  changedBy?: Meta12;

  @SpeakeasyMetadata({ data: "json, name=changed_on_delta_humanized" })
  changedOnDeltaHumanized?: any;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: Meta11;

  @SpeakeasyMetadata({ data: "json, name=created_on" })
  createdOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=css" })
  css?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=template_name" })
  templateName?: string;
}
