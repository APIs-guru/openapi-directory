import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UserApiGetListFieldsEnum {
    None = "None"
,    KnownLanguages = "KnownLanguages"
,    MainPicture = "MainPicture"
,    OldUsernames = "OldUsernames"
}

export enum UserApiGetListGroupsEnum {
    Nothing = "Nothing"
,    Limited = "Limited"
,    Regular = "Regular"
,    Trusted = "Trusted"
,    Moderator = "Moderator"
,    Admin = "Admin"
}

export enum UserApiGetListNameMatchModeEnum {
    Auto = "Auto"
,    Partial = "Partial"
,    StartsWith = "StartsWith"
,    Exact = "Exact"
,    Words = "Words"
}

export enum UserApiGetListSortEnum {
    RegisterDate = "RegisterDate"
,    Name = "Name"
,    Group = "Group"
}


export class UserApiGetListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: UserApiGetListFieldsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" })
  getTotalCount?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=groups" })
  groups?: UserApiGetListGroupsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeDisabled" })
  includeDisabled?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=joinDateAfter" })
  joinDateAfter?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=joinDateBefore" })
  joinDateBefore?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=knowsLanguage" })
  knowsLanguage?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" })
  nameMatchMode?: UserApiGetListNameMatchModeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=onlyVerified" })
  onlyVerified?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: UserApiGetListSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;
}


export class UserApiGetListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: UserApiGetListQueryParams;
}


export class UserApiGetListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  partialFindResultUserForApiContract?: shared.PartialFindResultUserForApiContract;

  @Metadata()
  statusCode: number;
}
