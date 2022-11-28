import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMyPaymentsSellingIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetMyPaymentsSellingIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetMyPaymentsSellingIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMyPaymentsSellingIdPathParams;

  @SpeakeasyMetadata()
  security: GetMyPaymentsSellingIdSecurity;
}


export class GetMyPaymentsSellingIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
