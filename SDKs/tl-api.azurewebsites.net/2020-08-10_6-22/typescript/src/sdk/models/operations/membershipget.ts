import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MembershipGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  bearer: shared.SchemeBearer;
}


export class MembershipGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: MembershipGetSecurity;
}


export class MembershipGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.MemberDto })
  memberDtos?: shared.MemberDto[];

  @SpeakeasyMetadata()
  problemDetails?: shared.ProblemDetails;

  @SpeakeasyMetadata()
  statusCode: number;
}
