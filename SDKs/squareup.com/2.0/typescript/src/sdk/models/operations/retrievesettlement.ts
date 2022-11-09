import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveSettlementPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=location_id" })
  locationId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=settlement_id" })
  settlementId: string;
}


export class RetrieveSettlementSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class RetrieveSettlementRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrieveSettlementPathParams;

  @Metadata()
  security: RetrieveSettlementSecurity;
}


export class RetrieveSettlementResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  v1Settlement?: shared.V1Settlement;
}
