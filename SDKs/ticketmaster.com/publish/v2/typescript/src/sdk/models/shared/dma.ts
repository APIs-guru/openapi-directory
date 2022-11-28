import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Dma
/** 
 * DMA (Designated Market Area)
**/
export class Dma extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;
}
