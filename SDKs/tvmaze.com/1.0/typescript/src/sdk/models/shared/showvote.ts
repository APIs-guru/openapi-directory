import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ShowVote extends SpeakeasyBase {
  @Metadata({ data: "json, name=show_id" })
  showId?: number;

  @Metadata({ data: "json, name=vote" })
  vote?: number;

  @Metadata({ data: "json, name=voted_at" })
  votedAt?: number;
}
