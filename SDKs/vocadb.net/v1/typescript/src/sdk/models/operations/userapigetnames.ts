import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum UserApiGetNamesNameMatchModeEnum {
    Auto = "Auto",
    Partial = "Partial",
    StartsWith = "StartsWith",
    Exact = "Exact",
    Words = "Words"
}


export class UserApiGetNamesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeDisabled" })
  includeDisabled?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameMatchMode" })
  nameMatchMode?: UserApiGetNamesNameMatchModeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}


export class UserApiGetNamesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: UserApiGetNamesQueryParams;
}


export class UserApiGetNamesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userApiGetNames200ApplicationJsonStrings?: string[];

  @SpeakeasyMetadata()
  userApiGetNames200ApplicationJsonpStrings?: string[];

  @SpeakeasyMetadata()
  userApiGetNames200TextJsonStrings?: string[];
}
