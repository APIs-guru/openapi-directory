import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiV1AgentsFamilyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=family" })
  family: string;
}


export class GetApiV1AgentsFamilyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiV1AgentsFamilyPathParams;
}


export class GetApiV1AgentsFamilyResponse extends SpeakeasyBase {
  @Metadata()
  agentResponse?: shared.AgentResponse;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
