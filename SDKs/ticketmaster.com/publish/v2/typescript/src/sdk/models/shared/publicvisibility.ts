import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PublicVisibility
/** 
 * The class defines the public visibility period on the Discovery/Publish API.
**/
export class PublicVisibility extends SpeakeasyBase {
  @Metadata({ data: "json, name=endDateTime" })
  endDateTime?: Date;

  @Metadata({ data: "json, name=startDateTime" })
  startDateTime?: Date;

  @Metadata({ data: "json, name=visible" })
  visible?: boolean;
}
