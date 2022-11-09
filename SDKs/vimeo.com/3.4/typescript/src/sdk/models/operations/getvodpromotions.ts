import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVodPromotionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" })
  ondemandId: number;
}

export enum GetVodPromotionsFilterEnum {
    Batch = "batch"
,    Default = "default"
,    Single = "single"
,    Vip = "vip"
}


export class GetVodPromotionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter: GetVodPromotionsFilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetVodPromotionsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetVodPromotionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVodPromotionsPathParams;

  @Metadata()
  queryParams: GetVodPromotionsQueryParams;

  @Metadata()
  security: GetVodPromotionsSecurity;
}


export class GetVodPromotionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata()
  onDemandPromotion?: shared.OnDemandPromotion;
}
