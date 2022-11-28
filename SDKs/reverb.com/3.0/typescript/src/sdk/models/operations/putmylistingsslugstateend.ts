import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutMyListingsSlugStateEndPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}

export enum PutMyListingsSlugStateEndRequestBodyReasonEnum {
    NotSold = "not_sold",
    ReverbSale = "reverb_sale"
}


export class PutMyListingsSlugStateEndRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason: PutMyListingsSlugStateEndRequestBodyReasonEnum;
}


export class PutMyListingsSlugStateEndSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PutMyListingsSlugStateEndRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutMyListingsSlugStateEndPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutMyListingsSlugStateEndRequestBody;

  @SpeakeasyMetadata()
  security: PutMyListingsSlugStateEndSecurity;
}


export class PutMyListingsSlugStateEndResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
