import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Model } from "./model";



export class ModelList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: Model })
  data?: Model[];

  @SpeakeasyMetadata({ data: "json, name=object" })
  object?: string;
}
