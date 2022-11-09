import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PollOption } from "./polloption";

export enum PollVotingStatusEnum {
    Open = "open"
,    Closed = "closed"
}


// Poll
/** 
 * Represent a Poll attached to a Tweet
**/
export class Poll extends SpeakeasyBase {
  @Metadata({ data: "json, name=duration_minutes" })
  durationMinutes?: number;

  @Metadata({ data: "json, name=end_datetime" })
  endDatetime?: Date;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=options", elemType: shared.PollOption })
  options: PollOption[];

  @Metadata({ data: "json, name=voting_status" })
  votingStatus?: PollVotingStatusEnum;
}
