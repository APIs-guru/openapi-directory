import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMyOrdersSellingIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetMyOrdersSellingIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetMyOrdersSellingIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMyOrdersSellingIdPathParams;

  @SpeakeasyMetadata()
  security: GetMyOrdersSellingIdSecurity;
}


export class GetMyOrdersSellingIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
