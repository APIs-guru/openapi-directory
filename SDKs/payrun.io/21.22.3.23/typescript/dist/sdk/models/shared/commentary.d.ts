import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The commentarys' employee
**/
export declare class CommentaryCommentaryEmployee extends SpeakeasyBase {
    atHref?: string;
    atRel?: string;
    atTitle?: string;
}
/**
 * The commentarys' pay run
**/
export declare class CommentaryCommentaryPayRun extends SpeakeasyBase {
    atHref?: string;
    atRel?: string;
    atTitle?: string;
}
export declare class CommentaryCommentary extends SpeakeasyBase {
    created?: Date;
    detail?: string;
    employee?: CommentaryCommentaryEmployee;
    payRun?: CommentaryCommentaryPayRun;
}
export declare class Commentary extends SpeakeasyBase {
    commentary?: CommentaryCommentary;
}
