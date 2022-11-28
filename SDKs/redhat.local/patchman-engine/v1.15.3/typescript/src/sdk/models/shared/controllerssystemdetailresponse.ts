import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ControllersSystemItem } from "./controllerssystemitem";



export class ControllersSystemDetailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ControllersSystemItem;
}
