import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetGroupsDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum GetGroupsFilterEnum {
    Featured = "featured"
}

export enum GetGroupsSortEnum {
    Alphabetical = "alphabetical"
,    Date = "date"
,    Followers = "followers"
,    Relevant = "relevant"
,    Videos = "videos"
}


export class GetGroupsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetGroupsDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetGroupsFilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetGroupsSortEnum;
}


export class GetGroupsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGroupsQueryParams;
}


export class GetGroupsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Group })
  groups?: shared.Group[];
}
