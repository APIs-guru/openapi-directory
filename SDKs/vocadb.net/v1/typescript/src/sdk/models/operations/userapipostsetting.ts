import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UserApiPostSettingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=settingName" })
  settingName: string;
}


export class UserApiPostSettingRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  string?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  string1?: string;

  @Metadata({ data: "request, media_type=application/xml" })
  string2?: string;

  @Metadata({ data: "request, media_type=text/json" })
  string3?: string;

  @Metadata({ data: "request, media_type=text/xml" })
  string4?: string;
}


export class UserApiPostSettingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UserApiPostSettingPathParams;

  @Metadata()
  request: UserApiPostSettingRequests;
}


export class UserApiPostSettingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
