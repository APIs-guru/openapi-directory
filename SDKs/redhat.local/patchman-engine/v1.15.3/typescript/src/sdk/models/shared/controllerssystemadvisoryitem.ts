import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ControllersSystemAdvisoryItemAttributes } from "./controllerssystemadvisoryitemattributes";



export class ControllersSystemAdvisoryItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: ControllersSystemAdvisoryItemAttributes;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
