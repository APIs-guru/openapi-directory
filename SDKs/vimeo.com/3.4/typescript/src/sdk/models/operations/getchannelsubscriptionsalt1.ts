import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetChannelSubscriptionsAlt1DirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum GetChannelSubscriptionsAlt1FilterEnum {
    Moderated = "moderated"
}

export enum GetChannelSubscriptionsAlt1SortEnum {
    Alphabetical = "alphabetical"
,    Date = "date"
,    Followers = "followers"
,    Videos = "videos"
}


export class GetChannelSubscriptionsAlt1QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetChannelSubscriptionsAlt1DirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetChannelSubscriptionsAlt1FilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetChannelSubscriptionsAlt1SortEnum;
}


export class GetChannelSubscriptionsAlt1Request extends SpeakeasyBase {
  @Metadata()
  queryParams: GetChannelSubscriptionsAlt1QueryParams;
}


export class GetChannelSubscriptionsAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Channel })
  channels?: shared.Channel[];
}
