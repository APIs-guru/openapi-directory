import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Dataset } from "./dataset";



export class DatasetList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: Dataset })
  data?: Dataset[];

  @SpeakeasyMetadata({ data: "json, name=object" })
  object?: string;
}
