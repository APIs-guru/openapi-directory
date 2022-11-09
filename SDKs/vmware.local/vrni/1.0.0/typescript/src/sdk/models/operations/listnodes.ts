import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListNodesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class ListNodesRequest extends SpeakeasyBase {
  @Metadata()
  security: ListNodesSecurity;
}


export class ListNodesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  nodeListResult?: shared.NodeListResult;

  @Metadata()
  statusCode: number;
}
