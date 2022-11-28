import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutMyRefundRequestsSellingIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutMyRefundRequestsSellingIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PutMyRefundRequestsSellingIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutMyRefundRequestsSellingIdPathParams;

  @SpeakeasyMetadata()
  security: PutMyRefundRequestsSellingIdSecurity;
}


export class PutMyRefundRequestsSellingIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
