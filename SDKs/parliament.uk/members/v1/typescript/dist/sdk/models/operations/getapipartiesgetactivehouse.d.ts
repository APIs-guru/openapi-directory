import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiPartiesGetActiveHousePathParams extends SpeakeasyBase {
    house: number;
}
export declare class GetApiPartiesGetActiveHouseRequest extends SpeakeasyBase {
    pathParams: GetApiPartiesGetActiveHousePathParams;
}
export declare class GetApiPartiesGetActiveHouseResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    partyMembersServiceSearchResult?: shared.PartyMembersServiceSearchResult;
    statusCode: number;
}
