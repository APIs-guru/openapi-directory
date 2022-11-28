import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UserApiGetSongListsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum UserApiGetSongListsFieldsEnum {
    None = "None",
    Description = "Description",
    Events = "Events",
    MainPicture = "MainPicture",
    Tags = "Tags"
}

export enum UserApiGetSongListsNameMatchModeEnum {
    Auto = "Auto",
    Partial = "Partial",
    StartsWith = "StartsWith",
    Exact = "Exact",
    Words = "Words"
}

export enum UserApiGetSongListsSortEnum {
    None = "None",
    Name = "Name",
    Date = "Date",
    CreateDate = "CreateDate"
}


export class UserApiGetSongListsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=childTags" })
  childTags?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: UserApiGetSongListsFieldsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" })
  getTotalCount?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" })
  nameMatchMode?: UserApiGetSongListsNameMatchModeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: UserApiGetSongListsSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagId" })
  tagId?: number[];
}


export class UserApiGetSongListsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserApiGetSongListsPathParams;

  @SpeakeasyMetadata()
  queryParams: UserApiGetSongListsQueryParams;
}


export class UserApiGetSongListsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  partialFindResultSongListForApiContract?: shared.PartialFindResultSongListForApiContract;

  @SpeakeasyMetadata()
  statusCode: number;
}
