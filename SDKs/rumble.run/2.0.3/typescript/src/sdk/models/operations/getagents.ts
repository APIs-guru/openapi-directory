import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAgentsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetAgentsRequest extends SpeakeasyBase {
  @Metadata()
  security: GetAgentsSecurity;
}


export class GetAgentsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.Agent })
  agents?: shared.Agent[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
