import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAgentsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetAgentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetAgentsSecurity;
}


export class GetAgentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Agent })
  agents?: shared.Agent[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
