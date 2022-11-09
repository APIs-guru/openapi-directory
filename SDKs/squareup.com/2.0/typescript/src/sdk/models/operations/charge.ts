import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ChargePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=location_id" })
  locationId: string;
}


export class ChargeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class ChargeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ChargePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ChargeRequest;

  @Metadata()
  security: ChargeSecurity;
}


export class ChargeResponse extends SpeakeasyBase {
  @Metadata()
  chargeResponse?: shared.ChargeResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
