import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReputationChanges extends SpeakeasyBase {
  @SpeakeasyMetadata()
  link?: string;

  @SpeakeasyMetadata()
  onDate?: number;

  @SpeakeasyMetadata()
  postId?: number;

  @SpeakeasyMetadata()
  postType?: string;

  @SpeakeasyMetadata()
  reputationChange?: number;

  @SpeakeasyMetadata()
  title?: string;

  @SpeakeasyMetadata()
  userId?: number;

  @SpeakeasyMetadata()
  voteType?: string;
}
