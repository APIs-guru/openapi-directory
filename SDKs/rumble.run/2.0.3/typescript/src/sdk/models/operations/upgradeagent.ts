import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpgradeAgentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agent_id" })
  agentId: string;
}


export class UpgradeAgentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class UpgradeAgentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpgradeAgentPathParams;

  @SpeakeasyMetadata()
  security: UpgradeAgentSecurity;
}


export class UpgradeAgentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
