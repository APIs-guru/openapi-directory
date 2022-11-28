import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssetTags extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags: Map<string, string>;
}
