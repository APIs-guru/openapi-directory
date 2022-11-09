import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SearchInvoicesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class SearchInvoicesRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SearchInvoicesRequest;

  @Metadata()
  security: SearchInvoicesSecurity;
}


export class SearchInvoicesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  searchInvoicesResponse?: shared.SearchInvoicesResponse;

  @Metadata()
  statusCode: number;
}
