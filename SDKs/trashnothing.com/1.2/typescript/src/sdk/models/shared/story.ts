import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Photo } from "./photo";
import { User } from "./user";



// Story
/** 
 * A user story
**/
export class Story extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=like_count" })
  likeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=photos", elemType: Photo })
  photos?: Photo[];

  @SpeakeasyMetadata({ data: "json, name=share_url" })
  shareUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=story_id" })
  storyId?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: User;

  @SpeakeasyMetadata({ data: "json, name=user_liked" })
  userLiked?: boolean;
}
