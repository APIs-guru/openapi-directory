import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateAgentSitePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agent_id" })
  agentId: string;
}


export class UpdateAgentSiteSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class UpdateAgentSiteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateAgentSitePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AgentSiteId;

  @Metadata()
  security: UpdateAgentSiteSecurity;
}


export class UpdateAgentSiteResponse extends SpeakeasyBase {
  @Metadata()
  agent?: shared.Agent;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
