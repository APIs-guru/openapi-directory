import { SpeakeasyBase } from "../../../internal/utils";
import { UserForApiContract } from "./userforapicontract";
export declare class DiscussionFolderContract extends SpeakeasyBase {
    description?: string;
    id?: number;
    lastTopicAuthor?: UserForApiContract;
    lastTopicDate?: Date;
    name?: string;
    topicCount?: number;
}
