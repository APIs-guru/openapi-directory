import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCategoryGroupsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=category" })
  category: string;
}

export enum GetCategoryGroupsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum GetCategoryGroupsSortEnum {
    Alphabetical = "alphabetical",
    Date = "date",
    Members = "members",
    Videos = "videos"
}


export class GetCategoryGroupsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetCategoryGroupsDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetCategoryGroupsSortEnum;
}


export class GetCategoryGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCategoryGroupsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCategoryGroupsQueryParams;
}


export class GetCategoryGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Group })
  groups?: shared.Group[];

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;
}
