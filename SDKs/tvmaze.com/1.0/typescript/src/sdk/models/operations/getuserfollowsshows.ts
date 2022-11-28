import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetUserFollowsShowsEmbedEnum {
    Show = "show"
}


export class GetUserFollowsShowsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=embed" })
  embed?: GetUserFollowsShowsEmbedEnum;
}


export class GetUserFollowsShowsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUserFollowsShowsQueryParams;
}


export class GetUserFollowsShowsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.ShowFollow })
  showFollows?: shared.ShowFollow[];

  @SpeakeasyMetadata()
  statusCode: number;
}
