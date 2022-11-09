import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DiscussionApiGetTopicsForFolderPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=folderId" })
  folderId: number;
}

export enum DiscussionApiGetTopicsForFolderFieldsEnum {
    None = "None"
,    Comments = "Comments"
,    CommentCount = "CommentCount"
,    Content = "Content"
,    LastComment = "LastComment"
,    All = "All"
}


export class DiscussionApiGetTopicsForFolderQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: DiscussionApiGetTopicsForFolderFieldsEnum;
}


export class DiscussionApiGetTopicsForFolderRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DiscussionApiGetTopicsForFolderPathParams;

  @Metadata()
  queryParams: DiscussionApiGetTopicsForFolderQueryParams;
}


export class DiscussionApiGetTopicsForFolderResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.DiscussionTopicContract })
  discussionTopicContracts?: shared.DiscussionTopicContract[];

  @Metadata()
  statusCode: number;
}
