import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BoundingBoxNortheast
/** 
 * The point defining the northeast corner of the bounding box.
**/
export class BoundingBoxNortheast extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: number;
}


// BoundingBoxSouthwest
/** 
 * The point defining the southwest corner of the bounding box.
**/
export class BoundingBoxSouthwest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: number;
}


// BoundingBox
/** 
 * A geographic bounding box defined by its southwest and northeast points.
**/
export class BoundingBox extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=northeast" })
  northeast?: BoundingBoxNortheast;

  @SpeakeasyMetadata({ data: "json, name=southwest" })
  southwest?: BoundingBoxSouthwest;
}
