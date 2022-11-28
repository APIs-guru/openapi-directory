import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiPartiesLordsByTypeForDatePathParams extends SpeakeasyBase {
    forDate: Date;
}
export declare class GetApiPartiesLordsByTypeForDateRequest extends SpeakeasyBase {
    pathParams: GetApiPartiesLordsByTypeForDatePathParams;
}
export declare class GetApiPartiesLordsByTypeForDateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    lordsByTypeMembersServiceSearchResult?: shared.LordsByTypeMembersServiceSearchResult;
    statusCode: number;
}
