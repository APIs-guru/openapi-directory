import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Asset } from "./asset";



export class Assets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: Asset })
  items?: Asset[];

  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: any;
}
