import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ClientForbiddenProblemReasonEnum {
    OfficialClientForbidden = "official-client-forbidden",
    ClientNotEnrolled = "client-not-enrolled"
}


// ClientForbiddenProblem
/** 
 * A problem that indicates your client is forbidden from making this request.
**/
export class ClientForbiddenProblem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: ClientForbiddenProblemReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=registration_url" })
  registrationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
