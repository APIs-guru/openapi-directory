import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DiscussionApiGetFoldersFieldsEnum {
    None = "None",
    LastTopic = "LastTopic",
    TopicCount = "TopicCount"
}


export class DiscussionApiGetFoldersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: DiscussionApiGetFoldersFieldsEnum;
}


export class DiscussionApiGetFoldersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DiscussionApiGetFoldersQueryParams;
}


export class DiscussionApiGetFoldersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.DiscussionFolderContract })
  discussionFolderContracts?: shared.DiscussionFolderContract[];

  @SpeakeasyMetadata()
  statusCode: number;
}
