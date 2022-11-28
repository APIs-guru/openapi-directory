import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateSipIpAddressServerList = [
	"https://api.twilio.com",
] as const;


export class UpdateSipIpAddressPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=IpAccessControlListSid" })
  ipAccessControlListSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateSipIpAddressUpdateSipIpAddressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=CidrPrefixLength;" })
  cidrPrefixLength?: number;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=IpAddress;" })
  ipAddress?: string;
}


export class UpdateSipIpAddressSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateSipIpAddressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateSipIpAddressPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateSipIpAddressUpdateSipIpAddressRequest;

  @SpeakeasyMetadata()
  security: UpdateSipIpAddressSecurity;
}


export class UpdateSipIpAddressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiV2010AccountSipSipIpAccessControlListSipIpAddress?: shared.ApiV2010AccountSipSipIpAccessControlListSipIpAddress;
}
