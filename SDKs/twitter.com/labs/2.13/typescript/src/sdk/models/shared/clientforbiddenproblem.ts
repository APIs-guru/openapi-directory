import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ClientForbiddenProblemReasonEnum {
    OfficialClientForbidden = "official-client-forbidden"
,    ClientNotEnrolled = "client-not-enrolled"
}


// ClientForbiddenProblem
/** 
 * A problem that indicates your client is forbidden from making this request.
**/
export class ClientForbiddenProblem extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail: string;

  @Metadata({ data: "json, name=reason" })
  reason?: ClientForbiddenProblemReasonEnum;

  @Metadata({ data: "json, name=registration_url" })
  registrationUrl?: string;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
