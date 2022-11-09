import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ControllersSystemItem } from "./controllerssystemitem";


export class ControllersSystemDetailResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: ControllersSystemItem;
}
