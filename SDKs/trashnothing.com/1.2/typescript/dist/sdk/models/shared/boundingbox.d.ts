import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The point defining the northeast corner of the bounding box.
**/
export declare class BoundingBoxNortheast extends SpeakeasyBase {
    latitude?: number;
    longitude?: number;
}
/**
 * The point defining the southwest corner of the bounding box.
**/
export declare class BoundingBoxSouthwest extends SpeakeasyBase {
    latitude?: number;
    longitude?: number;
}
/**
 * A geographic bounding box defined by its southwest and northeast points.
**/
export declare class BoundingBox extends SpeakeasyBase {
    northeast?: BoundingBoxNortheast;
    southwest?: BoundingBoxSouthwest;
}
