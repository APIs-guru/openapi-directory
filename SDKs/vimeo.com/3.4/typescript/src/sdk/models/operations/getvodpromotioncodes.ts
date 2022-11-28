import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVodPromotionCodesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" })
  ondemandId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=promotion_id" })
  promotionId: number;
}


export class GetVodPromotionCodesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetVodPromotionCodesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetVodPromotionCodesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVodPromotionCodesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetVodPromotionCodesQueryParams;

  @SpeakeasyMetadata()
  security: GetVodPromotionCodesSecurity;
}


export class GetVodPromotionCodesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;

  @SpeakeasyMetadata()
  onDemandPromotionCode?: shared.OnDemandPromotionCode;
}
