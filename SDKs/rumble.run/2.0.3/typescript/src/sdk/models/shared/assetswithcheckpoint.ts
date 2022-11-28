import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Asset } from "./asset";



export class AssetsWithCheckpoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets", elemType: Asset })
  assets: Asset[];

  @SpeakeasyMetadata({ data: "json, name=since" })
  since: number;
}
