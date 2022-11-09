import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListAristaSwitchesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class ListAristaSwitchesRequest extends SpeakeasyBase {
  @Metadata()
  security: ListAristaSwitchesSecurity;
}


export class ListAristaSwitchesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dataSourceListResponse?: shared.DataSourceListResponse;

  @Metadata()
  statusCode: number;
}
