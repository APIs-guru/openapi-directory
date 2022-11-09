import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum UserApiGetNamesNameMatchModeEnum {
    Auto = "Auto"
,    Partial = "Partial"
,    StartsWith = "StartsWith"
,    Exact = "Exact"
,    Words = "Words"
}


export class UserApiGetNamesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=includeDisabled" })
  includeDisabled?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" })
  nameMatchMode?: UserApiGetNamesNameMatchModeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}


export class UserApiGetNamesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: UserApiGetNamesQueryParams;
}


export class UserApiGetNamesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  userApiGetNames200ApplicationJsonStrings?: string[];

  @Metadata()
  userApiGetNames200ApplicationJsonpStrings?: string[];

  @Metadata()
  userApiGetNames200TextJsonStrings?: string[];
}
