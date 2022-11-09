import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PollOption } from "./polloption";
export declare enum PollVotingStatusEnum {
    Open = "open",
    Closed = "closed"
}
/**
 * Represent a Poll attached to a Tweet
**/
export declare class Poll extends SpeakeasyBase {
    durationMinutes?: number;
    endDatetime?: Date;
    id: string;
    options: PollOption[];
    votingStatus?: PollVotingStatusEnum;
}
