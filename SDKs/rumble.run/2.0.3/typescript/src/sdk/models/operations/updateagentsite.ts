import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateAgentSitePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agent_id" })
  agentId: string;
}


export class UpdateAgentSiteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class UpdateAgentSiteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateAgentSitePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AgentSiteId;

  @SpeakeasyMetadata()
  security: UpdateAgentSiteSecurity;
}


export class UpdateAgentSiteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  agent?: shared.Agent;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
