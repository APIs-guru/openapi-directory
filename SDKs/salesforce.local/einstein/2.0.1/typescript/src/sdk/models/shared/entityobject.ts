import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BoundingBox } from "./boundingbox";


export class EntityObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=boundingBox" })
  boundingBox?: BoundingBox;

  @Metadata({ data: "json, name=entity" })
  entity?: string;

  @Metadata({ data: "json, name=text" })
  text?: string;
}
