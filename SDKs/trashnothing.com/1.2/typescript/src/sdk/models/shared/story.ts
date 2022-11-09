import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Photo } from "./photo";
import { User } from "./user";


// Story
/** 
 * A user story
**/
export class Story extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=date" })
  date?: Date;

  @Metadata({ data: "json, name=like_count" })
  likeCount?: number;

  @Metadata({ data: "json, name=photos", elemType: shared.Photo })
  photos?: Photo[];

  @Metadata({ data: "json, name=share_url" })
  shareUrl?: string;

  @Metadata({ data: "json, name=story_id" })
  storyId?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=user" })
  user?: User;

  @Metadata({ data: "json, name=user_liked" })
  userLiked?: boolean;
}
