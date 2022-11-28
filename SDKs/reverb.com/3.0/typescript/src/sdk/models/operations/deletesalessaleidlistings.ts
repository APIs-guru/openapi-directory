import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteSalesSaleIdListingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sale_id" })
  saleId: string;
}


export class DeleteSalesSaleIdListingsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteSalesSaleIdListingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteSalesSaleIdListingsPathParams;

  @SpeakeasyMetadata()
  security: DeleteSalesSaleIdListingsSecurity;
}


export class DeleteSalesSaleIdListingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
