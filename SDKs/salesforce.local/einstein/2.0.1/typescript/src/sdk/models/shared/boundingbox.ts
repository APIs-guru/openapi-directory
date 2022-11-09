import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BoundingBox extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxX" })
  maxX?: number;

  @Metadata({ data: "json, name=maxY" })
  maxY?: number;

  @Metadata({ data: "json, name=minX" })
  minX?: number;

  @Metadata({ data: "json, name=minY" })
  minY?: number;
}
