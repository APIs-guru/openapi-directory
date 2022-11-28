import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionToPostItem } from "./actiontopostitem";



// ActionToPost
/** 
 * Container Class for an action to post
**/
export class ActionToPost extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Actions", elemType: ActionToPostItem })
  actions?: ActionToPostItem[];

  @SpeakeasyMetadata({ data: "json, name=DeviceID" })
  deviceId?: string;
}
