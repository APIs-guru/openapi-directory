import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetShopsShopIdShippingProfilesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=shop_id" })
  shopId: string;
}


export class GetShopsShopIdShippingProfilesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetShopsShopIdShippingProfilesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetShopsShopIdShippingProfilesPathParams;

  @Metadata()
  security: GetShopsShopIdShippingProfilesSecurity;
}


export class GetShopsShopIdShippingProfilesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
