import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtPathParams extends SpeakeasyBase {
    ext: shared.ExtEnum;
    heading: number;
    position: string;
    query: string;
    versionNumber: number;
}
export declare class GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtQueryParams extends SpeakeasyBase {
    extendedPostalCodesFor?: string;
    idxSet?: string;
    language?: string;
    limit?: number;
    multiplier?: number;
    routingTimeout?: number;
    typeahead?: boolean;
}
export declare class GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtRequest extends SpeakeasyBase {
    pathParams: GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtPathParams;
    queryParams: GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtQueryParams;
}
export declare class GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
