import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMyOrdersBuyingIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetMyOrdersBuyingIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetMyOrdersBuyingIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMyOrdersBuyingIdPathParams;

  @SpeakeasyMetadata()
  security: GetMyOrdersBuyingIdSecurity;
}


export class GetMyOrdersBuyingIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
