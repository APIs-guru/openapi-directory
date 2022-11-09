import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Photo } from "./photo";


export class PostSearchResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=date" })
  date?: Date;

  @Metadata({ data: "json, name=expiration" })
  expiration?: Date;

  @Metadata({ data: "json, name=footer" })
  footer?: string;

  @Metadata({ data: "json, name=group_id" })
  groupId?: string;

  @Metadata({ data: "json, name=latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=longitude" })
  longitude?: number;

  @Metadata({ data: "json, name=outcome" })
  outcome?: string;

  @Metadata({ data: "json, name=photos", elemType: shared.Photo })
  photos?: Photo[];

  @Metadata({ data: "json, name=post_id" })
  postId?: string;

  @Metadata({ data: "json, name=search_content" })
  searchContent?: string;

  @Metadata({ data: "json, name=search_title" })
  searchTitle?: string;

  @Metadata({ data: "json, name=source" })
  source?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=user_id" })
  userId?: string;
}
