import { SpeakeasyBase } from "../../../internal/utils";
import { UserForApiContract } from "./userforapicontract";
import { EntryRefContract } from "./entryrefcontract";
export declare class CommentForApiContract extends SpeakeasyBase {
    author?: UserForApiContract;
    authorName?: string;
    created?: Date;
    entry?: EntryRefContract;
    id?: number;
    message?: string;
}
