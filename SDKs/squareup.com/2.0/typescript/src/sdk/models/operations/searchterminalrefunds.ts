import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SearchTerminalRefundsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class SearchTerminalRefundsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SearchTerminalRefundsRequest;

  @Metadata()
  security: SearchTerminalRefundsSecurity;
}


export class SearchTerminalRefundsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  searchTerminalRefundsResponse?: shared.SearchTerminalRefundsResponse;

  @Metadata()
  statusCode: number;
}
