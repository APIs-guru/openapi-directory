import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MembershipPostRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.MemberDto;
}


export class MembershipPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  membershipPost200ApplicationJsonBoolean?: boolean;

  @Metadata()
  problemDetails?: shared.ProblemDetails;

  @Metadata()
  statusCode: number;
}
