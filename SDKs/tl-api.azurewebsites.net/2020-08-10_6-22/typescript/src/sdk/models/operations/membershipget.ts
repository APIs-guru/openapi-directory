import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MembershipGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  bearer: shared.SchemeBearer;
}


export class MembershipGetRequest extends SpeakeasyBase {
  @Metadata()
  security: MembershipGetSecurity;
}


export class MembershipGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.MemberDto })
  memberDtos?: shared.MemberDto[];

  @Metadata()
  problemDetails?: shared.ProblemDetails;

  @Metadata()
  statusCode: number;
}
