import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DiscussionApiGetTopicsFieldsEnum {
    None = "None",
    Comments = "Comments",
    CommentCount = "CommentCount",
    Content = "Content",
    LastComment = "LastComment",
    All = "All"
}
export declare enum DiscussionApiGetTopicsSortEnum {
    None = "None",
    Name = "Name",
    DateCreated = "DateCreated",
    LastCommentDate = "LastCommentDate"
}
export declare class DiscussionApiGetTopicsQueryParams extends SpeakeasyBase {
    fields?: DiscussionApiGetTopicsFieldsEnum;
    folderId?: number;
    getTotalCount?: boolean;
    maxResults?: number;
    sort?: DiscussionApiGetTopicsSortEnum;
    start?: number;
}
export declare class DiscussionApiGetTopicsRequest extends SpeakeasyBase {
    queryParams: DiscussionApiGetTopicsQueryParams;
}
export declare class DiscussionApiGetTopicsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    partialFindResultDiscussionTopicContract?: shared.PartialFindResultDiscussionTopicContract;
    statusCode: number;
}
