import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Youtube extends SpeakeasyBase {
  @Metadata({ data: "json, name=channel_id" })
  channelId?: string;

  @Metadata({ data: "json, name=channel_title" })
  channelTitle?: string;

  @Metadata({ data: "json, name=comments_count" })
  commentsCount?: number;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=dislike_count" })
  dislikeCount?: number;

  @Metadata({ data: "json, name=external_id" })
  externalId?: string;

  @Metadata({ data: "json, name=favorite_count" })
  favoriteCount?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=like_count" })
  likeCount?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=thumbnails" })
  thumbnails?: Map<string, any>;

  @Metadata({ data: "json, name=view_count" })
  viewCount?: number;
}
