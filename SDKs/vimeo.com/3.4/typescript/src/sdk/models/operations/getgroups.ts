import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetGroupsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum GetGroupsFilterEnum {
    Featured = "featured"
}

export enum GetGroupsSortEnum {
    Alphabetical = "alphabetical",
    Date = "date",
    Followers = "followers",
    Relevant = "relevant",
    Videos = "videos"
}


export class GetGroupsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetGroupsDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetGroupsFilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetGroupsSortEnum;
}


export class GetGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGroupsQueryParams;
}


export class GetGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Group })
  groups?: shared.Group[];
}
