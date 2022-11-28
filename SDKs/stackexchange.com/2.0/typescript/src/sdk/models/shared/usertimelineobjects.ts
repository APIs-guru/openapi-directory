import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserTimelineObjects extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badgeId?: number;

  @SpeakeasyMetadata()
  commentId?: number;

  @SpeakeasyMetadata()
  creationDate?: number;

  @SpeakeasyMetadata()
  detail?: string;

  @SpeakeasyMetadata()
  link?: string;

  @SpeakeasyMetadata()
  postId?: number;

  @SpeakeasyMetadata()
  postType?: string;

  @SpeakeasyMetadata()
  suggestedEditId?: number;

  @SpeakeasyMetadata()
  timelineType?: string;

  @SpeakeasyMetadata()
  title?: string;

  @SpeakeasyMetadata()
  userId?: number;
}
