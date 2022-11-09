import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCategoryChannelsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=category" })
  category: string;
}

export enum GetCategoryChannelsDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum GetCategoryChannelsSortEnum {
    Alphabetical = "alphabetical"
,    Date = "date"
,    Followers = "followers"
,    Videos = "videos"
}


export class GetCategoryChannelsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetCategoryChannelsDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetCategoryChannelsSortEnum;
}


export class GetCategoryChannelsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCategoryChannelsPathParams;

  @Metadata()
  queryParams: GetCategoryChannelsQueryParams;
}


export class GetCategoryChannelsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Channel })
  channels?: shared.Channel[];

  @Metadata()
  legacyError?: shared.LegacyError;
}
