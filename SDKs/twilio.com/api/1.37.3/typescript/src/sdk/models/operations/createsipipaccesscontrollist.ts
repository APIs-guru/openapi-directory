import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateSipIpAccessControlListServerList = [
	"https://api.twilio.com",
] as const;


export class CreateSipIpAccessControlListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;
}


export class CreateSipIpAccessControlListCreateSipIpAccessControlListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName: string;
}


export class CreateSipIpAccessControlListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSipIpAccessControlListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateSipIpAccessControlListPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSipIpAccessControlListCreateSipIpAccessControlListRequest;

  @SpeakeasyMetadata()
  security: CreateSipIpAccessControlListSecurity;
}


export class CreateSipIpAccessControlListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiV2010AccountSipSipIpAccessControlList?: shared.ApiV2010AccountSipSipIpAccessControlList;
}
