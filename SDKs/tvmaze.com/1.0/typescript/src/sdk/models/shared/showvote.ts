import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ShowVote extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=show_id" })
  showId?: number;

  @SpeakeasyMetadata({ data: "json, name=vote" })
  vote?: number;

  @SpeakeasyMetadata({ data: "json, name=voted_at" })
  votedAt?: number;
}


export class ShowVoteInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=vote" })
  vote?: number;
}
