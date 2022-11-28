import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTeamsTeamIdEventSourcesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class GetTeamsTeamIdEventSourcesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTeamsTeamIdEventSourcesPathParams;
}


export class GetTeamsTeamIdEventSourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata({ elemType: shared.EventSourceEndpointInfo })
  eventSourceEndpointInfos?: shared.EventSourceEndpointInfo[];

  @SpeakeasyMetadata()
  statusCode: number;
}
