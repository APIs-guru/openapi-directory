import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GeometryTypeEnum {
    Point = "Point"
}
export declare class Geometry extends SpeakeasyBase {
    coordinates?: number[];
    type: GeometryTypeEnum;
}
