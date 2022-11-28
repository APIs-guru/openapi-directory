import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClickModel } from "./clickmodel";



export class GetClicksModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clicks", elemType: ClickModel })
  clicks?: ClickModel[];

  @SpeakeasyMetadata({ data: "json, name=lastId" })
  lastId?: string;
}
