import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ControllersSystemItemAttributes } from "./controllerssystemitemattributes";



export class ControllersSystemItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: ControllersSystemItemAttributes;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
