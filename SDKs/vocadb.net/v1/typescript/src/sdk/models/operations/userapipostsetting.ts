import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserApiPostSettingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=settingName" })
  settingName: string;
}


export class UserApiPostSettingRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  string?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  string1?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  string2?: string;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  string3?: string;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  string4?: string;
}


export class UserApiPostSettingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserApiPostSettingPathParams;

  @SpeakeasyMetadata()
  request: UserApiPostSettingRequests;
}


export class UserApiPostSettingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
