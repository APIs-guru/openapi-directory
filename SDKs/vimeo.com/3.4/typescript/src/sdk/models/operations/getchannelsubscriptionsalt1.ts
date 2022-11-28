import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetChannelSubscriptionsAlt1DirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum GetChannelSubscriptionsAlt1FilterEnum {
    Moderated = "moderated"
}

export enum GetChannelSubscriptionsAlt1SortEnum {
    Alphabetical = "alphabetical",
    Date = "date",
    Followers = "followers",
    Videos = "videos"
}


export class GetChannelSubscriptionsAlt1QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetChannelSubscriptionsAlt1DirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetChannelSubscriptionsAlt1FilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetChannelSubscriptionsAlt1SortEnum;
}


export class GetChannelSubscriptionsAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetChannelSubscriptionsAlt1QueryParams;
}


export class GetChannelSubscriptionsAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Channel })
  channels?: shared.Channel[];
}
