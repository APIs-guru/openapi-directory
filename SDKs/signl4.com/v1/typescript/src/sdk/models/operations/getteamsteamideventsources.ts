import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeamsTeamIdEventSourcesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class GetTeamsTeamIdEventSourcesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamsTeamIdEventSourcesPathParams;
}


export class GetTeamsTeamIdEventSourcesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata({ elemType: shared.EventSourceEndpointInfo })
  eventSourceEndpointInfos?: shared.EventSourceEndpointInfo[];

  @Metadata()
  statusCode: number;
}
