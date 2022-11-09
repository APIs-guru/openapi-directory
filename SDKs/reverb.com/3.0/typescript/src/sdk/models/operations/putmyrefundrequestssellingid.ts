import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutMyRefundRequestsSellingIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutMyRefundRequestsSellingIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PutMyRefundRequestsSellingIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutMyRefundRequestsSellingIdPathParams;

  @Metadata()
  security: PutMyRefundRequestsSellingIdSecurity;
}


export class PutMyRefundRequestsSellingIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
