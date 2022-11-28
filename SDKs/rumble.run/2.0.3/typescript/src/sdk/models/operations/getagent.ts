import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAgentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agent_id" })
  agentId: string;
}


export class GetAgentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetAgentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAgentPathParams;

  @SpeakeasyMetadata()
  security: GetAgentSecurity;
}


export class GetAgentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  agent?: shared.Agent;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
