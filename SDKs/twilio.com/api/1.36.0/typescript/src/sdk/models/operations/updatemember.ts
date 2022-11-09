import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEMEMBER_SERVERS = [
	"https://api.twilio.com",
];



export class UpdateMemberPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=CallSid" })
  callSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=QueueSid" })
  queueSid: string;
}

export enum UpdateMemberUpdateMemberRequestMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class UpdateMemberUpdateMemberRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Method;" })
  method?: UpdateMemberUpdateMemberRequestMethodEnum;

  @Metadata({ data: "form, name=Url;" })
  url: string;
}


export class UpdateMemberSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateMemberRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateMemberPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateMemberUpdateMemberRequest;

  @Metadata()
  security: UpdateMemberSecurity;
}


export class UpdateMemberResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  apiV2010AccountQueueMember?: shared.ApiV2010AccountQueueMember;
}
