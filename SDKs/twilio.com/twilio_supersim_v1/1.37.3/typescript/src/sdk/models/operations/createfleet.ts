import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateFleetServerList = [
	"https://supersim.twilio.com",
] as const;

export enum CreateFleetCreateFleetRequestIpCommandsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}

export enum CreateFleetCreateFleetRequestSmsCommandsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class CreateFleetCreateFleetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=DataEnabled;" })
  dataEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=DataLimit;" })
  dataLimit?: number;

  @SpeakeasyMetadata({ data: "form, name=IpCommandsMethod;" })
  ipCommandsMethod?: CreateFleetCreateFleetRequestIpCommandsMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=IpCommandsUrl;" })
  ipCommandsUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=NetworkAccessProfile;" })
  networkAccessProfile: string;

  @SpeakeasyMetadata({ data: "form, name=SmsCommandsEnabled;" })
  smsCommandsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=SmsCommandsMethod;" })
  smsCommandsMethod?: CreateFleetCreateFleetRequestSmsCommandsMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=SmsCommandsUrl;" })
  smsCommandsUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class CreateFleetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateFleetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateFleetCreateFleetRequest;

  @SpeakeasyMetadata()
  security: CreateFleetSecurity;
}


export class CreateFleetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  supersimV1Fleet?: shared.SupersimV1Fleet;
}
