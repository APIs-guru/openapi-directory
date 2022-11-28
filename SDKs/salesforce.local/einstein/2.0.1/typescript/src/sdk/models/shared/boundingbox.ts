import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BoundingBox extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxX" })
  maxX?: number;

  @SpeakeasyMetadata({ data: "json, name=maxY" })
  maxY?: number;

  @SpeakeasyMetadata({ data: "json, name=minX" })
  minX?: number;

  @SpeakeasyMetadata({ data: "json, name=minY" })
  minY?: number;
}
