import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateConnectAppServerList = [
	"https://api.twilio.com",
] as const;


export class UpdateConnectAppPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}

export enum UpdateConnectAppUpdateConnectAppRequestDeauthorizeCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class UpdateConnectAppUpdateConnectAppRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=AuthorizeRedirectUrl;" })
  authorizeRedirectUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=CompanyName;" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "form, name=DeauthorizeCallbackMethod;" })
  deauthorizeCallbackMethod?: UpdateConnectAppUpdateConnectAppRequestDeauthorizeCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=DeauthorizeCallbackUrl;" })
  deauthorizeCallbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=Description;" })
  description?: string;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=HomepageUrl;" })
  homepageUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=Permissions;" })
  permissions?: shared.ConnectAppEnumPermissionEnum[];
}


export class UpdateConnectAppSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateConnectAppRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateConnectAppPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateConnectAppUpdateConnectAppRequest;

  @SpeakeasyMetadata()
  security: UpdateConnectAppSecurity;
}


export class UpdateConnectAppResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiV2010AccountConnectApp?: shared.ApiV2010AccountConnectApp;
}
