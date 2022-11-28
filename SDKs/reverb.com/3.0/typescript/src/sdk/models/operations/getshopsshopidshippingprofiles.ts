import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetShopsShopIdShippingProfilesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shop_id" })
  shopId: string;
}


export class GetShopsShopIdShippingProfilesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetShopsShopIdShippingProfilesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetShopsShopIdShippingProfilesPathParams;

  @SpeakeasyMetadata()
  security: GetShopsShopIdShippingProfilesSecurity;
}


export class GetShopsShopIdShippingProfilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
