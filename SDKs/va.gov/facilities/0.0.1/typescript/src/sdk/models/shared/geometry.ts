import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GeometryTypeEnum {
    Point = "Point"
}


export class Geometry extends SpeakeasyBase {
  @Metadata({ data: "json, name=coordinates" })
  coordinates?: number[];

  @Metadata({ data: "json, name=type" })
  type: GeometryTypeEnum;
}
