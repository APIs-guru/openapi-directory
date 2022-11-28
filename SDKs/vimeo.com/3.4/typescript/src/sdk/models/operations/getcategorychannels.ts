import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCategoryChannelsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=category" })
  category: string;
}

export enum GetCategoryChannelsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum GetCategoryChannelsSortEnum {
    Alphabetical = "alphabetical",
    Date = "date",
    Followers = "followers",
    Videos = "videos"
}


export class GetCategoryChannelsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetCategoryChannelsDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetCategoryChannelsSortEnum;
}


export class GetCategoryChannelsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCategoryChannelsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCategoryChannelsQueryParams;
}


export class GetCategoryChannelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Channel })
  channels?: shared.Channel[];

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;
}
