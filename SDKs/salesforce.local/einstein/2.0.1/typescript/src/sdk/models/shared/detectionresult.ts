import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BoundingBox } from "./boundingbox";


// DetectionResult
/** 
 * label
**/
export class DetectionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=boundingBox" })
  boundingBox?: BoundingBox;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=probability" })
  probability?: number;
}
