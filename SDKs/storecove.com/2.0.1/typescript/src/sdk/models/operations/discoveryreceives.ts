import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DiscoveryReceivesRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DiscoverableParticipant;
}


export class DiscoveryReceivesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  discoveredParticipant?: shared.DiscoveredParticipant;

  @Metadata()
  errorModels?: any[];

  @Metadata()
  statusCode: number;
}
