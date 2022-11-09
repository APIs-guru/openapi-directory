import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Attributes } from "./attributes";
import { BoundingBox } from "./boundingbox";


// OcrResult
/** 
 * Array of probabilities for the prediction.
**/
export class OcrResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: Attributes;

  @Metadata({ data: "json, name=boundingBox" })
  boundingBox?: BoundingBox;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=probability" })
  probability?: number;
}
