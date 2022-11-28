import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PublicVisibility
/** 
 * The class defines the public visibility period on the Discovery/Publish API.
**/
export class PublicVisibility extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endDateTime" })
  endDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=startDateTime" })
  startDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=visible" })
  visible?: boolean;
}
