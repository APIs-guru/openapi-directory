import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ControllersAdvisoryItemAttributes } from "./controllersadvisoryitemattributes";



export class ControllersAdvisoryItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: ControllersAdvisoryItemAttributes;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
