import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListCardsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=customer_id" })
  customerId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_disabled" })
  includeDisabled?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=reference_id" })
  referenceId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_order" })
  sortOrder?: string;
}


export class ListCardsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class ListCardsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListCardsQueryParams;

  @Metadata()
  security: ListCardsSecurity;
}


export class ListCardsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listCardsResponse?: shared.ListCardsResponse;

  @Metadata()
  statusCode: number;
}
