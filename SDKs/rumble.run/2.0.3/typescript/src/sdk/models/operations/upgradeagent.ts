import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpgradeAgentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agent_id" })
  agentId: string;
}


export class UpgradeAgentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class UpgradeAgentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpgradeAgentPathParams;

  @Metadata()
  security: UpgradeAgentSecurity;
}


export class UpgradeAgentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
