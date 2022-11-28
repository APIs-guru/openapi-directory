import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVodBackgroundsPathParams extends SpeakeasyBase {
    ondemandId: number;
}
export declare class GetVodBackgroundsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class GetVodBackgroundsRequest extends SpeakeasyBase {
    pathParams: GetVodBackgroundsPathParams;
    queryParams: GetVodBackgroundsQueryParams;
}
export declare class GetVodBackgroundsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    pictures?: shared.Picture[];
}
