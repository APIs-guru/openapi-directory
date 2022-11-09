import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UserApiGetOnePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum UserApiGetOneFieldsEnum {
    None = "None"
,    KnownLanguages = "KnownLanguages"
,    MainPicture = "MainPicture"
,    OldUsernames = "OldUsernames"
}


export class UserApiGetOneQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: UserApiGetOneFieldsEnum;
}


export class UserApiGetOneRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UserApiGetOnePathParams;

  @Metadata()
  queryParams: UserApiGetOneQueryParams;
}


export class UserApiGetOneResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  userForApiContract?: shared.UserForApiContract;
}
