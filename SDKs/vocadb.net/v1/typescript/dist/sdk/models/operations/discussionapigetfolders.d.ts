import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DiscussionApiGetFoldersFieldsEnum {
    None = "None",
    LastTopic = "LastTopic",
    TopicCount = "TopicCount"
}
export declare class DiscussionApiGetFoldersQueryParams extends SpeakeasyBase {
    fields?: DiscussionApiGetFoldersFieldsEnum;
}
export declare class DiscussionApiGetFoldersRequest extends SpeakeasyBase {
    queryParams: DiscussionApiGetFoldersQueryParams;
}
export declare class DiscussionApiGetFoldersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    discussionFolderContracts?: shared.DiscussionFolderContract[];
    statusCode: number;
}
