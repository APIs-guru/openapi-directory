import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiV1AgentsFamilyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=family" })
  family: string;
}


export class GetApiV1AgentsFamilyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiV1AgentsFamilyPathParams;
}


export class GetApiV1AgentsFamilyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  agentResponse?: shared.AgentResponse;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
