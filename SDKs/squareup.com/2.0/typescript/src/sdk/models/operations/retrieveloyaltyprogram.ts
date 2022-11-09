import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveLoyaltyProgramPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=program_id" })
  programId: string;
}


export class RetrieveLoyaltyProgramSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class RetrieveLoyaltyProgramRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrieveLoyaltyProgramPathParams;

  @Metadata()
  security: RetrieveLoyaltyProgramSecurity;
}


export class RetrieveLoyaltyProgramResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  retrieveLoyaltyProgramResponse?: shared.RetrieveLoyaltyProgramResponse;

  @Metadata()
  statusCode: number;
}
