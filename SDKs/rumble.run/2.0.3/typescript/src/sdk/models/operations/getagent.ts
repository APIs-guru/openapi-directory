import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAgentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agent_id" })
  agentId: string;
}


export class GetAgentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetAgentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAgentPathParams;

  @Metadata()
  security: GetAgentSecurity;
}


export class GetAgentResponse extends SpeakeasyBase {
  @Metadata()
  agent?: shared.Agent;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
