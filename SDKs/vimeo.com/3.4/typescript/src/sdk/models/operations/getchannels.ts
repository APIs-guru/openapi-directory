import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetChannelsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum GetChannelsFilterEnum {
    Featured = "featured"
}

export enum GetChannelsSortEnum {
    Alphabetical = "alphabetical",
    Date = "date",
    Followers = "followers",
    Relevant = "relevant",
    Videos = "videos"
}


export class GetChannelsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetChannelsDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetChannelsFilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetChannelsSortEnum;
}


export class GetChannelsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetChannelsQueryParams;
}


export class GetChannelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Channel })
  channels?: shared.Channel[];

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;
}
