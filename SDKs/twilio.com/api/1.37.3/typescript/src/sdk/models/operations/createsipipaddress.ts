import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateSipIpAddressServerList = [
	"https://api.twilio.com",
] as const;


export class CreateSipIpAddressPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=IpAccessControlListSid" })
  ipAccessControlListSid: string;
}


export class CreateSipIpAddressCreateSipIpAddressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=CidrPrefixLength;" })
  cidrPrefixLength?: number;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName: string;

  @SpeakeasyMetadata({ data: "form, name=IpAddress;" })
  ipAddress: string;
}


export class CreateSipIpAddressSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSipIpAddressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateSipIpAddressPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSipIpAddressCreateSipIpAddressRequest;

  @SpeakeasyMetadata()
  security: CreateSipIpAddressSecurity;
}


export class CreateSipIpAddressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiV2010AccountSipSipIpAccessControlListSipIpAddress?: shared.ApiV2010AccountSipSipIpAccessControlListSipIpAddress;
}
