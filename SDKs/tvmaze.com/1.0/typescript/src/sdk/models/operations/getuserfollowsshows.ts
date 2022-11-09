import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetUserFollowsShowsEmbedEnum {
    Show = "show"
}


export class GetUserFollowsShowsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=embed" })
  embed?: GetUserFollowsShowsEmbedEnum;
}


export class GetUserFollowsShowsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUserFollowsShowsQueryParams;
}


export class GetUserFollowsShowsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.ShowFollow })
  showFollows?: shared.ShowFollow[];

  @Metadata()
  statusCode: number;
}
