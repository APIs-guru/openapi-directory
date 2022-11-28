import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssetResponseAttributes } from "./assetresponseattributes";



// AssetResponseData
/** 
 * The type of resource (an asset) and attributes of the asset.
**/
export class AssetResponseData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: AssetResponseAttributes;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
