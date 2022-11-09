import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostSalesSaleIdListingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=sale_id" })
  saleId: string;
}


export class PostSalesSaleIdListingsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostSalesSaleIdListingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostSalesSaleIdListingsPathParams;

  @Metadata()
  security: PostSalesSaleIdListingsSecurity;
}


export class PostSalesSaleIdListingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
