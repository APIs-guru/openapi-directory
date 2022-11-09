import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateRefundPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=location_id" })
  locationId: string;
}


export class CreateRefundSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreateRefundRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateRefundPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.V1CreateRefundRequest;

  @Metadata()
  security: CreateRefundSecurity;
}


export class CreateRefundResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  v1Refund?: shared.V1Refund;
}
