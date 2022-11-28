import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DiscoveryReceivesRequest extends SpeakeasyBase {
    request: shared.DiscoverableParticipant;
}
export declare class DiscoveryReceivesResponse extends SpeakeasyBase {
    contentType: string;
    discoveredParticipant?: shared.DiscoveredParticipant;
    errorModels?: any[];
    statusCode: number;
}
