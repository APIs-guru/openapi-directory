import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListNodesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class ListNodesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: ListNodesSecurity;
}


export class ListNodesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  nodeListResult?: shared.NodeListResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
