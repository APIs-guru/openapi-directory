import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVodPromotionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" })
  ondemandId: number;
}

export enum GetVodPromotionsFilterEnum {
    Batch = "batch",
    Default = "default",
    Single = "single",
    Vip = "vip"
}


export class GetVodPromotionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter: GetVodPromotionsFilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetVodPromotionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetVodPromotionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVodPromotionsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetVodPromotionsQueryParams;

  @SpeakeasyMetadata()
  security: GetVodPromotionsSecurity;
}


export class GetVodPromotionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;

  @SpeakeasyMetadata()
  onDemandPromotion?: shared.OnDemandPromotion;
}
