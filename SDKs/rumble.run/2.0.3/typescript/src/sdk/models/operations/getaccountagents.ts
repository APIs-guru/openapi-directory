import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAccountAgentsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class GetAccountAgentsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetAccountAgentsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAccountAgentsQueryParams;

  @Metadata()
  security: GetAccountAgentsSecurity;
}


export class GetAccountAgentsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.Agent })
  agents?: shared.Agent[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
