import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMyOrdersSellingBuyerHistoryBuyerIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=buyer_id" })
  buyerId: string;
}


export class GetMyOrdersSellingBuyerHistoryBuyerIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetMyOrdersSellingBuyerHistoryBuyerIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMyOrdersSellingBuyerHistoryBuyerIdPathParams;

  @SpeakeasyMetadata()
  security: GetMyOrdersSellingBuyerHistoryBuyerIdSecurity;
}


export class GetMyOrdersSellingBuyerHistoryBuyerIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
