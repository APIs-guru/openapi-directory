import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutMyListingsSlugStateEndPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}

export enum PutMyListingsSlugStateEndRequestBodyReasonEnum {
    NotSold = "not_sold"
,    ReverbSale = "reverb_sale"
}


export class PutMyListingsSlugStateEndRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=reason" })
  reason: PutMyListingsSlugStateEndRequestBodyReasonEnum;
}


export class PutMyListingsSlugStateEndSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PutMyListingsSlugStateEndRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutMyListingsSlugStateEndPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PutMyListingsSlugStateEndRequestBody;

  @Metadata()
  security: PutMyListingsSlugStateEndSecurity;
}


export class PutMyListingsSlugStateEndResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
