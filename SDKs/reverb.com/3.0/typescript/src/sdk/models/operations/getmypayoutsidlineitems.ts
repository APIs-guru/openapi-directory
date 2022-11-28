import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMyPayoutsIdLineItemsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetMyPayoutsIdLineItemsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetMyPayoutsIdLineItemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMyPayoutsIdLineItemsPathParams;

  @SpeakeasyMetadata()
  security: GetMyPayoutsIdLineItemsSecurity;
}


export class GetMyPayoutsIdLineItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
