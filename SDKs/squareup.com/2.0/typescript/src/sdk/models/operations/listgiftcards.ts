import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListGiftCardsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=customer_id" })
  customerId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;
}


export class ListGiftCardsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class ListGiftCardsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListGiftCardsQueryParams;

  @Metadata()
  security: ListGiftCardsSecurity;
}


export class ListGiftCardsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listGiftCardsResponse?: shared.ListGiftCardsResponse;

  @Metadata()
  statusCode: number;
}
