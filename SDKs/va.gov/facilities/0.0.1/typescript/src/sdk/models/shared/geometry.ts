import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GeometryTypeEnum {
    Point = "Point"
}


export class Geometry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=coordinates" })
  coordinates?: number[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GeometryTypeEnum;
}
