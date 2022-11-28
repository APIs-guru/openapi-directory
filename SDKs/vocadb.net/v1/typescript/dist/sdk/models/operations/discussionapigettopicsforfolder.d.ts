import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DiscussionApiGetTopicsForFolderPathParams extends SpeakeasyBase {
    folderId: number;
}
export declare enum DiscussionApiGetTopicsForFolderFieldsEnum {
    None = "None",
    Comments = "Comments",
    CommentCount = "CommentCount",
    Content = "Content",
    LastComment = "LastComment",
    All = "All"
}
export declare class DiscussionApiGetTopicsForFolderQueryParams extends SpeakeasyBase {
    fields?: DiscussionApiGetTopicsForFolderFieldsEnum;
}
export declare class DiscussionApiGetTopicsForFolderRequest extends SpeakeasyBase {
    pathParams: DiscussionApiGetTopicsForFolderPathParams;
    queryParams: DiscussionApiGetTopicsForFolderQueryParams;
}
export declare class DiscussionApiGetTopicsForFolderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    discussionTopicContracts?: shared.DiscussionTopicContract[];
    statusCode: number;
}
