import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Asset } from "./asset";


export class AssetsWithCheckpoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets", elemType: shared.Asset })
  assets: Asset[];

  @Metadata({ data: "json, name=since" })
  since: number;
}
