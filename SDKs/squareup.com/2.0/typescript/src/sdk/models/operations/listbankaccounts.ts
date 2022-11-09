import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListBankAccountsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=location_id" })
  locationId?: string;
}


export class ListBankAccountsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class ListBankAccountsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListBankAccountsQueryParams;

  @Metadata()
  security: ListBankAccountsSecurity;
}


export class ListBankAccountsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listBankAccountsResponse?: shared.ListBankAccountsResponse;

  @Metadata()
  statusCode: number;
}
