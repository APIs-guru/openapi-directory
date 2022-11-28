import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPhotosByIdsQueryParams extends SpeakeasyBase {
    devicePixelRatio?: number;
    photoIds: string;
}
export declare class GetPhotosByIdsRequest extends SpeakeasyBase {
    queryParams: GetPhotosByIdsQueryParams;
}
export declare class GetPhotosByIdsResponse extends SpeakeasyBase {
    contentType: string;
    photoResults?: shared.PhotoResult[];
    statusCode: number;
}
