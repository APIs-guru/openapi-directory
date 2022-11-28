import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Youtube extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channel_id" })
  channelId?: string;

  @SpeakeasyMetadata({ data: "json, name=channel_title" })
  channelTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=comments_count" })
  commentsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=dislike_count" })
  dislikeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=external_id" })
  externalId?: string;

  @SpeakeasyMetadata({ data: "json, name=favorite_count" })
  favoriteCount?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=like_count" })
  likeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbnails" })
  thumbnails?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=view_count" })
  viewCount?: number;
}
