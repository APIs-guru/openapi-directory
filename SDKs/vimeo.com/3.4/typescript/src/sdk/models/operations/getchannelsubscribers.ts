import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetChannelSubscribersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;
}

export enum GetChannelSubscribersDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum GetChannelSubscribersFilterEnum {
    Moderators = "moderators"
}

export enum GetChannelSubscribersSortEnum {
    Alphabetical = "alphabetical",
    Date = "date"
}


export class GetChannelSubscribersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetChannelSubscribersDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter: GetChannelSubscribersFilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetChannelSubscribersSortEnum;
}


export class GetChannelSubscribersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetChannelSubscribersPathParams;

  @SpeakeasyMetadata()
  queryParams: GetChannelSubscribersQueryParams;
}


export class GetChannelSubscribersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;

  @SpeakeasyMetadata({ elemType: shared.User })
  users?: shared.User[];
}
