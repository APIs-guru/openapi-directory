import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteSalesSaleIdListingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=sale_id" })
  saleId: string;
}


export class DeleteSalesSaleIdListingsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteSalesSaleIdListingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteSalesSaleIdListingsPathParams;

  @Metadata()
  security: DeleteSalesSaleIdListingsSecurity;
}


export class DeleteSalesSaleIdListingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
