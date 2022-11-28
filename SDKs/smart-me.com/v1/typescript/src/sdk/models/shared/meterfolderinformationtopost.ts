import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MeterFolderInformationToPost
/** 
 * Container for a Meter or Folder Information to Post
**/
export class MeterFolderInformationToPost extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id, form, name=Id;" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Name, form, name=Name;" })
  name?: string;
}
