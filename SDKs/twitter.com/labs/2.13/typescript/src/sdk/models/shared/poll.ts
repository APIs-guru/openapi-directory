import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PollOption } from "./polloption";


export enum PollVotingStatusEnum {
    Open = "open",
    Closed = "closed"
}


// Poll
/** 
 * Represent a Poll attached to a Tweet
**/
export class Poll extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=duration_minutes" })
  durationMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=end_datetime" })
  endDatetime?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=options", elemType: PollOption })
  options: PollOption[];

  @SpeakeasyMetadata({ data: "json, name=voting_status" })
  votingStatus?: PollVotingStatusEnum;
}
