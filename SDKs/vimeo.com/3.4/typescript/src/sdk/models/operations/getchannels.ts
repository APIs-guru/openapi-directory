import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetChannelsDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum GetChannelsFilterEnum {
    Featured = "featured"
}

export enum GetChannelsSortEnum {
    Alphabetical = "alphabetical"
,    Date = "date"
,    Followers = "followers"
,    Relevant = "relevant"
,    Videos = "videos"
}


export class GetChannelsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetChannelsDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetChannelsFilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetChannelsSortEnum;
}


export class GetChannelsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetChannelsQueryParams;
}


export class GetChannelsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Channel })
  channels?: shared.Channel[];

  @Metadata()
  legacyError?: shared.LegacyError;
}
