import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiMembersIdSynopsisPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetApiMembersIdSynopsisRequest extends SpeakeasyBase {
    pathParams: GetApiMembersIdSynopsisPathParams;
}
export declare class GetApiMembersIdSynopsisResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    stringItem?: shared.StringItem;
}
