import { SpeakeasyBase } from "../../../internal/utils";
import { UserForApiContract } from "./userforapicontract";
import { CommentForApiContract } from "./commentforapicontract";
export declare class DiscussionTopicContract extends SpeakeasyBase {
    author?: UserForApiContract;
    commentCount?: number;
    comments?: CommentForApiContract[];
    content?: string;
    created?: Date;
    folderId?: number;
    id?: number;
    lastComment?: CommentForApiContract;
    locked?: boolean;
    name?: string;
}
