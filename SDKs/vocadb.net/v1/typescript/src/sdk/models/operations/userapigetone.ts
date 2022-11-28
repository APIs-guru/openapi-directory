import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UserApiGetOnePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum UserApiGetOneFieldsEnum {
    None = "None",
    KnownLanguages = "KnownLanguages",
    MainPicture = "MainPicture",
    OldUsernames = "OldUsernames"
}


export class UserApiGetOneQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: UserApiGetOneFieldsEnum;
}


export class UserApiGetOneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserApiGetOnePathParams;

  @SpeakeasyMetadata()
  queryParams: UserApiGetOneQueryParams;
}


export class UserApiGetOneResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userForApiContract?: shared.UserForApiContract;
}
