import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssetResponseData } from "./assetresponsedata";



// AssetResponse
/** 
 * The response returned by the Serve API [get asset](#get-asset) request. Includes details of a hosted video, image, audio file, thumbnail or poster image. The response follows the [json:api](https://jsonapi.org/) specification.
**/
export class AssetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: AssetResponseData;
}
