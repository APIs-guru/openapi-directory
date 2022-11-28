import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveAgentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agent_id" })
  agentId: string;
}


export class RemoveAgentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class RemoveAgentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveAgentPathParams;

  @SpeakeasyMetadata()
  security: RemoveAgentSecurity;
}


export class RemoveAgentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
