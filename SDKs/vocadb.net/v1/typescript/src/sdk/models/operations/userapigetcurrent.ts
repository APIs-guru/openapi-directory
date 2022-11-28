import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum UserApiGetCurrentFieldsEnum {
    None = "None",
    KnownLanguages = "KnownLanguages",
    MainPicture = "MainPicture",
    OldUsernames = "OldUsernames"
}


export class UserApiGetCurrentQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: UserApiGetCurrentFieldsEnum;
}


export class UserApiGetCurrentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: UserApiGetCurrentQueryParams;
}


export class UserApiGetCurrentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userForApiContract?: shared.UserForApiContract;
}
