import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MeterFolderInformationToPost
/** 
 * Container for a Meter or Folder Information to Post
**/
export class MeterFolderInformationToPost extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id, form, name=Id;" })
  id?: string;

  @Metadata({ data: "json, name=Name, form, name=Name;" })
  name?: string;
}
