import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CalculateLoyaltyPointsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=program_id" })
  programId: string;
}


export class CalculateLoyaltyPointsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CalculateLoyaltyPointsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CalculateLoyaltyPointsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CalculateLoyaltyPointsRequest;

  @Metadata()
  security: CalculateLoyaltyPointsSecurity;
}


export class CalculateLoyaltyPointsResponse extends SpeakeasyBase {
  @Metadata()
  calculateLoyaltyPointsResponse?: shared.CalculateLoyaltyPointsResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
