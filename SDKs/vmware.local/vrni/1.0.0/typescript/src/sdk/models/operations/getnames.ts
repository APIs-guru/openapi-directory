import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetNamesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetNamesRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.NamesRequest;

  @Metadata()
  security: GetNamesSecurity;
}


export class GetNamesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  namesResponse?: shared.NamesResponse;

  @Metadata()
  statusCode: number;
}
