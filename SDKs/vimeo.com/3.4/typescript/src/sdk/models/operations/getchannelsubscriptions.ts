import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetChannelSubscriptionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}

export enum GetChannelSubscriptionsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum GetChannelSubscriptionsFilterEnum {
    Moderated = "moderated"
}

export enum GetChannelSubscriptionsSortEnum {
    Alphabetical = "alphabetical",
    Date = "date",
    Followers = "followers",
    Videos = "videos"
}


export class GetChannelSubscriptionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetChannelSubscriptionsDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetChannelSubscriptionsFilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetChannelSubscriptionsSortEnum;
}


export class GetChannelSubscriptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetChannelSubscriptionsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetChannelSubscriptionsQueryParams;
}


export class GetChannelSubscriptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Channel })
  channels?: shared.Channel[];
}
