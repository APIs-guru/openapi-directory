import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UserApiGetSongListsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum UserApiGetSongListsFieldsEnum {
    None = "None"
,    Description = "Description"
,    Events = "Events"
,    MainPicture = "MainPicture"
,    Tags = "Tags"
}

export enum UserApiGetSongListsNameMatchModeEnum {
    Auto = "Auto"
,    Partial = "Partial"
,    StartsWith = "StartsWith"
,    Exact = "Exact"
,    Words = "Words"
}

export enum UserApiGetSongListsSortEnum {
    None = "None"
,    Name = "Name"
,    Date = "Date"
,    CreateDate = "CreateDate"
}


export class UserApiGetSongListsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=childTags" })
  childTags?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: UserApiGetSongListsFieldsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" })
  getTotalCount?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" })
  nameMatchMode?: UserApiGetSongListsNameMatchModeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: UserApiGetSongListsSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tagId" })
  tagId?: number[];
}


export class UserApiGetSongListsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UserApiGetSongListsPathParams;

  @Metadata()
  queryParams: UserApiGetSongListsQueryParams;
}


export class UserApiGetSongListsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  partialFindResultSongListForApiContract?: shared.PartialFindResultSongListForApiContract;

  @Metadata()
  statusCode: number;
}
