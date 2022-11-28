import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DiscussionApiGetTopicsForFolderPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=folderId" })
  folderId: number;
}

export enum DiscussionApiGetTopicsForFolderFieldsEnum {
    None = "None",
    Comments = "Comments",
    CommentCount = "CommentCount",
    Content = "Content",
    LastComment = "LastComment",
    All = "All"
}


export class DiscussionApiGetTopicsForFolderQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: DiscussionApiGetTopicsForFolderFieldsEnum;
}


export class DiscussionApiGetTopicsForFolderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DiscussionApiGetTopicsForFolderPathParams;

  @SpeakeasyMetadata()
  queryParams: DiscussionApiGetTopicsForFolderQueryParams;
}


export class DiscussionApiGetTopicsForFolderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.DiscussionTopicContract })
  discussionTopicContracts?: shared.DiscussionTopicContract[];

  @SpeakeasyMetadata()
  statusCode: number;
}
