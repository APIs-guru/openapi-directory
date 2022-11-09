import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ControllersSystemAdvisoryItemAttributes } from "./controllerssystemadvisoryitemattributes";


export class ControllersSystemAdvisoryItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: ControllersSystemAdvisoryItemAttributes;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
