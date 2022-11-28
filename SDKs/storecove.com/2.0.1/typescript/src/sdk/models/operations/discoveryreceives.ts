import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DiscoveryReceivesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DiscoverableParticipant;
}


export class DiscoveryReceivesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  discoveredParticipant?: shared.DiscoveredParticipant;

  @SpeakeasyMetadata()
  errorModels?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
