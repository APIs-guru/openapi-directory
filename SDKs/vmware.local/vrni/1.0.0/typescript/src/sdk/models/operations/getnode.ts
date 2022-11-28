import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNodePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetNodeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetNodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNodePathParams;

  @SpeakeasyMetadata()
  security: GetNodeSecurity;
}


export class GetNodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  node?: shared.Node;

  @SpeakeasyMetadata()
  statusCode: number;
}
