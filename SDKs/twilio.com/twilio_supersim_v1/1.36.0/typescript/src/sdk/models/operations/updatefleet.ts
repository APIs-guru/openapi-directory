import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEFLEET_SERVERS = [
	"https://supersim.twilio.com",
];



export class UpdateFleetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}

export enum UpdateFleetUpdateFleetRequestIpCommandsMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}

export enum UpdateFleetUpdateFleetRequestSmsCommandsMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class UpdateFleetUpdateFleetRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=DataLimit;" })
  dataLimit?: number;

  @Metadata({ data: "form, name=IpCommandsMethod;" })
  ipCommandsMethod?: UpdateFleetUpdateFleetRequestIpCommandsMethodEnum;

  @Metadata({ data: "form, name=IpCommandsUrl;" })
  ipCommandsUrl?: string;

  @Metadata({ data: "form, name=NetworkAccessProfile;" })
  networkAccessProfile?: string;

  @Metadata({ data: "form, name=SmsCommandsMethod;" })
  smsCommandsMethod?: UpdateFleetUpdateFleetRequestSmsCommandsMethodEnum;

  @Metadata({ data: "form, name=SmsCommandsUrl;" })
  smsCommandsUrl?: string;

  @Metadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class UpdateFleetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateFleetRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateFleetPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateFleetUpdateFleetRequest;

  @Metadata()
  security: UpdateFleetSecurity;
}


export class UpdateFleetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  supersimV1Fleet?: shared.SupersimV1Fleet;
}
