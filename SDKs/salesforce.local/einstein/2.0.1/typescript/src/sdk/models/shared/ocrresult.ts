import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Attributes } from "./attributes";
import { BoundingBox } from "./boundingbox";



// OcrResult
/** 
 * Array of probabilities for the prediction.
**/
export class OcrResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: Attributes;

  @SpeakeasyMetadata({ data: "json, name=boundingBox" })
  boundingBox?: BoundingBox;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=probability" })
  probability?: number;
}
