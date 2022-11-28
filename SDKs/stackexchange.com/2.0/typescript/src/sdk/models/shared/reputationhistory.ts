import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReputationHistory extends SpeakeasyBase {
  @SpeakeasyMetadata()
  creationDate?: number;

  @SpeakeasyMetadata()
  postId?: number;

  @SpeakeasyMetadata()
  reputationChange?: number;

  @SpeakeasyMetadata()
  reputationHistoryType?: string;

  @SpeakeasyMetadata()
  userId?: number;
}
