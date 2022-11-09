import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListLoyaltyProgramsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class ListLoyaltyProgramsRequest extends SpeakeasyBase {
  @Metadata()
  security: ListLoyaltyProgramsSecurity;
}


export class ListLoyaltyProgramsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listLoyaltyProgramsResponse?: shared.ListLoyaltyProgramsResponse;

  @Metadata()
  statusCode: number;
}
