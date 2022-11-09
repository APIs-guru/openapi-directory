import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UserApiGetCurrentFieldsEnum {
    None = "None"
,    KnownLanguages = "KnownLanguages"
,    MainPicture = "MainPicture"
,    OldUsernames = "OldUsernames"
}


export class UserApiGetCurrentQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: UserApiGetCurrentFieldsEnum;
}


export class UserApiGetCurrentRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: UserApiGetCurrentQueryParams;
}


export class UserApiGetCurrentResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  userForApiContract?: shared.UserForApiContract;
}
