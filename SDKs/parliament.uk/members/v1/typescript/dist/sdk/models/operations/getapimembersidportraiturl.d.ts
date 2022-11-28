import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiMembersIdPortraitUrlPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetApiMembersIdPortraitUrlRequest extends SpeakeasyBase {
    pathParams: GetApiMembersIdPortraitUrlPathParams;
}
export declare class GetApiMembersIdPortraitUrlResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    stringItem?: shared.StringItem;
}
