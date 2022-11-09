import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListCiscoSwitchesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class ListCiscoSwitchesRequest extends SpeakeasyBase {
  @Metadata()
  security: ListCiscoSwitchesSecurity;
}


export class ListCiscoSwitchesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dataSourceListResponse?: shared.DataSourceListResponse;

  @Metadata()
  statusCode: number;
}
