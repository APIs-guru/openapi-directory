import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSearchVersionNumberSQueryExtPathParams extends SpeakeasyBase {
    ext: shared.ExtEnum;
    query: string;
    versionNumber: number;
}
export declare class GetSearchVersionNumberSQueryExtQueryParams extends SpeakeasyBase {
    btmRight?: string;
    countrySet?: string;
    idxSet?: string;
    language?: string;
    lat?: number;
    limit?: number;
    lon?: number;
    ofs?: number;
    radius?: number;
    topLeft?: string;
    typeahead?: boolean;
    view?: shared.ViewEnum;
}
export declare class GetSearchVersionNumberSQueryExtRequest extends SpeakeasyBase {
    pathParams: GetSearchVersionNumberSQueryExtPathParams;
    queryParams: GetSearchVersionNumberSQueryExtQueryParams;
}
export declare class GetSearchVersionNumberSQueryExtResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
