import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ControllersSystemItemAttributes } from "./controllerssystemitemattributes";


export class ControllersSystemItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: ControllersSystemItemAttributes;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
