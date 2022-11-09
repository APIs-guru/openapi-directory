import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetChannelSubscribersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;
}

export enum GetChannelSubscribersDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum GetChannelSubscribersFilterEnum {
    Moderators = "moderators"
}

export enum GetChannelSubscribersSortEnum {
    Alphabetical = "alphabetical"
,    Date = "date"
}


export class GetChannelSubscribersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetChannelSubscribersDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter: GetChannelSubscribersFilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetChannelSubscribersSortEnum;
}


export class GetChannelSubscribersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetChannelSubscribersPathParams;

  @Metadata()
  queryParams: GetChannelSubscribersQueryParams;
}


export class GetChannelSubscribersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata({ elemType: shared.User })
  users?: shared.User[];
}
