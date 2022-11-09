import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DiscussionApiGetFoldersFieldsEnum {
    None = "None"
,    LastTopic = "LastTopic"
,    TopicCount = "TopicCount"
}


export class DiscussionApiGetFoldersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: DiscussionApiGetFoldersFieldsEnum;
}


export class DiscussionApiGetFoldersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DiscussionApiGetFoldersQueryParams;
}


export class DiscussionApiGetFoldersResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.DiscussionFolderContract })
  discussionFolderContracts?: shared.DiscussionFolderContract[];

  @Metadata()
  statusCode: number;
}
