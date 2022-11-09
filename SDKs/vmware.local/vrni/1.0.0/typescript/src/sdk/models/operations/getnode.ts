import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetNodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetNodeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetNodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNodePathParams;

  @Metadata()
  security: GetNodeSecurity;
}


export class GetNodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  node?: shared.Node;

  @Metadata()
  statusCode: number;
}
