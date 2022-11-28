import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiPartiesStateOfThePartiesHouseForDatePathParams extends SpeakeasyBase {
    forDate: Date;
    house: number;
}
export declare class GetApiPartiesStateOfThePartiesHouseForDateRequest extends SpeakeasyBase {
    pathParams: GetApiPartiesStateOfThePartiesHouseForDatePathParams;
}
export declare class GetApiPartiesStateOfThePartiesHouseForDateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    partySeatCountMembersServiceSearchResult?: shared.PartySeatCountMembersServiceSearchResult;
    statusCode: number;
}
