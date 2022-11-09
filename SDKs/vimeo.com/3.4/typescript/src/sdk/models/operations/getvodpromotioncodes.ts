import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVodPromotionCodesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" })
  ondemandId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=promotion_id" })
  promotionId: number;
}


export class GetVodPromotionCodesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetVodPromotionCodesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetVodPromotionCodesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVodPromotionCodesPathParams;

  @Metadata()
  queryParams: GetVodPromotionCodesQueryParams;

  @Metadata()
  security: GetVodPromotionCodesSecurity;
}


export class GetVodPromotionCodesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata()
  onDemandPromotionCode?: shared.OnDemandPromotionCode;
}
