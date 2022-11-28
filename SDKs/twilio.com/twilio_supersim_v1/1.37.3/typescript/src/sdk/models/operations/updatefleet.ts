import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateFleetServerList = [
	"https://supersim.twilio.com",
] as const;


export class UpdateFleetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}

export enum UpdateFleetUpdateFleetRequestIpCommandsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum UpdateFleetUpdateFleetRequestSmsCommandsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class UpdateFleetUpdateFleetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=DataLimit;" })
  dataLimit?: number;

  @SpeakeasyMetadata({ data: "form, name=IpCommandsMethod;" })
  ipCommandsMethod?: UpdateFleetUpdateFleetRequestIpCommandsMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=IpCommandsUrl;" })
  ipCommandsUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=NetworkAccessProfile;" })
  networkAccessProfile?: string;

  @SpeakeasyMetadata({ data: "form, name=SmsCommandsMethod;" })
  smsCommandsMethod?: UpdateFleetUpdateFleetRequestSmsCommandsMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=SmsCommandsUrl;" })
  smsCommandsUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class UpdateFleetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateFleetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateFleetPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateFleetUpdateFleetRequest;

  @SpeakeasyMetadata()
  security: UpdateFleetSecurity;
}


export class UpdateFleetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  supersimV1Fleet?: shared.SupersimV1Fleet;
}
