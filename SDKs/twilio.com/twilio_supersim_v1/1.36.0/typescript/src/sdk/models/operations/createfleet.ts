import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEFLEET_SERVERS = [
	"https://supersim.twilio.com",
];


export enum CreateFleetCreateFleetRequestIpCommandsMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum CreateFleetCreateFleetRequestSmsCommandsMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class CreateFleetCreateFleetRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=DataEnabled;" })
  dataEnabled?: boolean;

  @Metadata({ data: "form, name=DataLimit;" })
  dataLimit?: number;

  @Metadata({ data: "form, name=IpCommandsMethod;" })
  ipCommandsMethod?: CreateFleetCreateFleetRequestIpCommandsMethodEnum;

  @Metadata({ data: "form, name=IpCommandsUrl;" })
  ipCommandsUrl?: string;

  @Metadata({ data: "form, name=NetworkAccessProfile;" })
  networkAccessProfile: string;

  @Metadata({ data: "form, name=SmsCommandsEnabled;" })
  smsCommandsEnabled?: boolean;

  @Metadata({ data: "form, name=SmsCommandsMethod;" })
  smsCommandsMethod?: CreateFleetCreateFleetRequestSmsCommandsMethodEnum;

  @Metadata({ data: "form, name=SmsCommandsUrl;" })
  smsCommandsUrl?: string;

  @Metadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class CreateFleetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateFleetRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateFleetCreateFleetRequest;

  @Metadata()
  security: CreateFleetSecurity;
}


export class CreateFleetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  supersimV1Fleet?: shared.SupersimV1Fleet;
}
