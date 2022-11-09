import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListVcentersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class ListVcentersRequest extends SpeakeasyBase {
  @Metadata()
  security: ListVcentersSecurity;
}


export class ListVcentersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dataSourceListResponse?: shared.DataSourceListResponse;

  @Metadata()
  statusCode: number;
}
