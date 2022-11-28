import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiMembersIdThumbnailUrlPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetApiMembersIdThumbnailUrlRequest extends SpeakeasyBase {
    pathParams: GetApiMembersIdThumbnailUrlPathParams;
}
export declare class GetApiMembersIdThumbnailUrlResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    stringItem?: shared.StringItem;
}
