import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAccountAgentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class GetAccountAgentsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetAccountAgentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAccountAgentsQueryParams;

  @SpeakeasyMetadata()
  security: GetAccountAgentsSecurity;
}


export class GetAccountAgentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Agent })
  agents?: shared.Agent[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
