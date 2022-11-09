import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ControllersAdvisoryItemAttributes } from "./controllersadvisoryitemattributes";


export class ControllersAdvisoryItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: ControllersAdvisoryItemAttributes;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
