import { SpeakeasyBase } from "../../../internal/utils";
import { AssetResponseData } from "./assetresponsedata";
/**
 * The response returned by the Serve API [get asset by render id](#get-asset-by-render-id) request. The response  is an array of asset resources, including video, image, audio, thumbnail and poster image. The response follows  the [json:api](https://jsonapi.org/) specification.
**/
export declare class AssetRenderResponse extends SpeakeasyBase {
    data?: AssetResponseData[];
}
