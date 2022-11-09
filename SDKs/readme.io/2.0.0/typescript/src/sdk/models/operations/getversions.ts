import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVersionsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiKey: shared.SchemeApiKey;
}


export class GetVersionsRequest extends SpeakeasyBase {
  @Metadata()
  security: GetVersionsSecurity;
}


export class GetVersionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
