import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetChannelModeratorsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;
}

export enum GetChannelModeratorsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum GetChannelModeratorsSortEnum {
    Alphabetical = "alphabetical",
    Date = "date"
}


export class GetChannelModeratorsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetChannelModeratorsDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetChannelModeratorsSortEnum;
}


export class GetChannelModeratorsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetChannelModeratorsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetChannelModeratorsQueryParams;
}


export class GetChannelModeratorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.User })
  users?: shared.User[];
}
