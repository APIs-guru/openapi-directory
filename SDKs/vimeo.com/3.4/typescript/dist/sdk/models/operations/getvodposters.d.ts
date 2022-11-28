import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVodPostersPathParams extends SpeakeasyBase {
    ondemandId: number;
}
export declare class GetVodPostersQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class GetVodPostersRequest extends SpeakeasyBase {
    pathParams: GetVodPostersPathParams;
    queryParams: GetVodPostersQueryParams;
}
export declare class GetVodPostersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    pictures?: shared.Picture[];
}
