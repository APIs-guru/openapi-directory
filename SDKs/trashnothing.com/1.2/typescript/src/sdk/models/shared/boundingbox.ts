import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BoundingBoxNortheast
/** 
 * The point defining the northeast corner of the bounding box.
**/
export class BoundingBoxNortheast extends SpeakeasyBase {
  @Metadata({ data: "json, name=latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=longitude" })
  longitude?: number;
}


// BoundingBoxSouthwest
/** 
 * The point defining the southwest corner of the bounding box.
**/
export class BoundingBoxSouthwest extends SpeakeasyBase {
  @Metadata({ data: "json, name=latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=longitude" })
  longitude?: number;
}


// BoundingBox
/** 
 * A geographic bounding box defined by its southwest and northeast points.
**/
export class BoundingBox extends SpeakeasyBase {
  @Metadata({ data: "json, name=northeast" })
  northeast?: BoundingBoxNortheast;

  @Metadata({ data: "json, name=southwest" })
  southwest?: BoundingBoxSouthwest;
}
