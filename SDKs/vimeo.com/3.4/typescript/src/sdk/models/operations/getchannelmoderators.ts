import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetChannelModeratorsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;
}

export enum GetChannelModeratorsDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum GetChannelModeratorsSortEnum {
    Alphabetical = "alphabetical"
,    Date = "date"
}


export class GetChannelModeratorsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetChannelModeratorsDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetChannelModeratorsSortEnum;
}


export class GetChannelModeratorsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetChannelModeratorsPathParams;

  @Metadata()
  queryParams: GetChannelModeratorsQueryParams;
}


export class GetChannelModeratorsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.User })
  users?: shared.User[];
}
