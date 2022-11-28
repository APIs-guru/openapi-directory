import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssetComments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments: string;
}
