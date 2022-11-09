import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssetResponseAttributes } from "./assetresponseattributes";


// AssetResponseData
/** 
 * The type of resource (an asset) and attributes of the asset.
**/
export class AssetResponseData extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: AssetResponseAttributes;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
