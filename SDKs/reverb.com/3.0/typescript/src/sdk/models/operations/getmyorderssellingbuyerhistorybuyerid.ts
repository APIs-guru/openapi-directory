import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMyOrdersSellingBuyerHistoryBuyerIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=buyer_id" })
  buyerId: string;
}


export class GetMyOrdersSellingBuyerHistoryBuyerIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetMyOrdersSellingBuyerHistoryBuyerIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMyOrdersSellingBuyerHistoryBuyerIdPathParams;

  @Metadata()
  security: GetMyOrdersSellingBuyerHistoryBuyerIdSecurity;
}


export class GetMyOrdersSellingBuyerHistoryBuyerIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
