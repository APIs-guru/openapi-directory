import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssetResponseData } from "./assetresponsedata";


// AssetRenderResponse
/** 
 * The response returned by the Serve API [get asset by render id](#get-asset-by-render-id) request. The response  is an array of asset resources, including video, image, audio, thumbnail and poster image. The response follows  the [json:api](https://jsonapi.org/) specification.
**/
export class AssetRenderResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.AssetResponseData })
  data?: AssetResponseData[];
}
