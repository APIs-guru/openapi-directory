import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveCustomerSegmentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=segment_id" })
  segmentId: string;
}


export class RetrieveCustomerSegmentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class RetrieveCustomerSegmentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrieveCustomerSegmentPathParams;

  @Metadata()
  security: RetrieveCustomerSegmentSecurity;
}


export class RetrieveCustomerSegmentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  retrieveCustomerSegmentResponse?: shared.RetrieveCustomerSegmentResponse;

  @Metadata()
  statusCode: number;
}
