import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateMemberServerList = [
	"https://api.twilio.com",
] as const;


export class UpdateMemberPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CallSid" })
  callSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=QueueSid" })
  queueSid: string;
}

export enum UpdateMemberUpdateMemberRequestMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class UpdateMemberUpdateMemberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Method;" })
  method?: UpdateMemberUpdateMemberRequestMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=Url;" })
  url: string;
}


export class UpdateMemberSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateMemberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateMemberPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateMemberUpdateMemberRequest;

  @SpeakeasyMetadata()
  security: UpdateMemberSecurity;
}


export class UpdateMemberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiV2010AccountQueueMember?: shared.ApiV2010AccountQueueMember;
}
