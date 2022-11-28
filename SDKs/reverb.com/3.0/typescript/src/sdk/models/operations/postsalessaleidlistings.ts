import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostSalesSaleIdListingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sale_id" })
  saleId: string;
}


export class PostSalesSaleIdListingsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostSalesSaleIdListingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostSalesSaleIdListingsPathParams;

  @SpeakeasyMetadata()
  security: PostSalesSaleIdListingsSecurity;
}


export class PostSalesSaleIdListingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
