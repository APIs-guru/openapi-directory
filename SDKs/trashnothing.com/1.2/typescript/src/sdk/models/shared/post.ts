import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Photo } from "./photo";



// Post
/** 
 * An offer, wanted, admin, taken or received post.
**/
export class Post extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=expiration" })
  expiration?: Date;

  @SpeakeasyMetadata({ data: "json, name=footer" })
  footer?: string;

  @SpeakeasyMetadata({ data: "json, name=group_id" })
  groupId?: string;

  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: number;

  @SpeakeasyMetadata({ data: "json, name=outcome" })
  outcome?: string;

  @SpeakeasyMetadata({ data: "json, name=photos", elemType: Photo })
  photos?: Photo[];

  @SpeakeasyMetadata({ data: "json, name=post_id" })
  postId?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: string;
}
