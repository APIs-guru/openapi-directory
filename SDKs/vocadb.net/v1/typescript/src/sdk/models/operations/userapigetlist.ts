import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum UserApiGetListFieldsEnum {
    None = "None",
    KnownLanguages = "KnownLanguages",
    MainPicture = "MainPicture",
    OldUsernames = "OldUsernames"
}

export enum UserApiGetListGroupsEnum {
    Nothing = "Nothing",
    Limited = "Limited",
    Regular = "Regular",
    Trusted = "Trusted",
    Moderator = "Moderator",
    Admin = "Admin"
}

export enum UserApiGetListNameMatchModeEnum {
    Auto = "Auto",
    Partial = "Partial",
    StartsWith = "StartsWith",
    Exact = "Exact",
    Words = "Words"
}

export enum UserApiGetListSortEnum {
    RegisterDate = "RegisterDate",
    Name = "Name",
    Group = "Group"
}


export class UserApiGetListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: UserApiGetListFieldsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=getTotalCount" })
  getTotalCount?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groups" })
  groups?: UserApiGetListGroupsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeDisabled" })
  includeDisabled?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=joinDateAfter" })
  joinDateAfter?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=joinDateBefore" })
  joinDateBefore?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=knowsLanguage" })
  knowsLanguage?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" })
  nameMatchMode?: UserApiGetListNameMatchModeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onlyVerified" })
  onlyVerified?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: UserApiGetListSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;
}


export class UserApiGetListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: UserApiGetListQueryParams;
}


export class UserApiGetListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  partialFindResultUserForApiContract?: shared.PartialFindResultUserForApiContract;

  @SpeakeasyMetadata()
  statusCode: number;
}
