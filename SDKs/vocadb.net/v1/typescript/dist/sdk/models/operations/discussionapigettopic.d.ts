import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DiscussionApiGetTopicPathParams extends SpeakeasyBase {
    topicId: number;
}
export declare enum DiscussionApiGetTopicFieldsEnum {
    None = "None",
    Comments = "Comments",
    CommentCount = "CommentCount",
    Content = "Content",
    LastComment = "LastComment",
    All = "All"
}
export declare class DiscussionApiGetTopicQueryParams extends SpeakeasyBase {
    fields?: DiscussionApiGetTopicFieldsEnum;
}
export declare class DiscussionApiGetTopicRequest extends SpeakeasyBase {
    pathParams: DiscussionApiGetTopicPathParams;
    queryParams: DiscussionApiGetTopicQueryParams;
}
export declare class DiscussionApiGetTopicResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    discussionTopicContract?: shared.DiscussionTopicContract;
    statusCode: number;
}
