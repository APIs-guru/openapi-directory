import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RemoveAgentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agent_id" })
  agentId: string;
}


export class RemoveAgentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class RemoveAgentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemoveAgentPathParams;

  @Metadata()
  security: RemoveAgentSecurity;
}


export class RemoveAgentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
