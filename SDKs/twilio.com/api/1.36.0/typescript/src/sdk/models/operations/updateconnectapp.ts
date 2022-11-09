import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATECONNECTAPP_SERVERS = [
	"https://api.twilio.com",
];



export class UpdateConnectAppPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}

export enum UpdateConnectAppUpdateConnectAppRequestDeauthorizeCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class UpdateConnectAppUpdateConnectAppRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=AuthorizeRedirectUrl;" })
  authorizeRedirectUrl?: string;

  @Metadata({ data: "form, name=CompanyName;" })
  companyName?: string;

  @Metadata({ data: "form, name=DeauthorizeCallbackMethod;" })
  deauthorizeCallbackMethod?: UpdateConnectAppUpdateConnectAppRequestDeauthorizeCallbackMethodEnum;

  @Metadata({ data: "form, name=DeauthorizeCallbackUrl;" })
  deauthorizeCallbackUrl?: string;

  @Metadata({ data: "form, name=Description;" })
  description?: string;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=HomepageUrl;" })
  homepageUrl?: string;

  @Metadata({ data: "form, name=Permissions;" })
  permissions?: shared.ConnectAppEnumPermissionEnum[];
}


export class UpdateConnectAppSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateConnectAppRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateConnectAppPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateConnectAppUpdateConnectAppRequest;

  @Metadata()
  security: UpdateConnectAppSecurity;
}


export class UpdateConnectAppResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  apiV2010AccountConnectApp?: shared.ApiV2010AccountConnectApp;
}
