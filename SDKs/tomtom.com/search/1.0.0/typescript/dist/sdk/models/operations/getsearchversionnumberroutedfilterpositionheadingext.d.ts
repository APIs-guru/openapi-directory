import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSearchVersionNumberRoutedFilterPositionHeadingExtPathParams extends SpeakeasyBase {
    ext: shared.ExtEnum;
    heading: number;
    position: string;
    versionNumber: number;
}
export declare class GetSearchVersionNumberRoutedFilterPositionHeadingExtQueryParams extends SpeakeasyBase {
    poiList: string;
    routingTimeout?: number;
}
export declare class GetSearchVersionNumberRoutedFilterPositionHeadingExtRequest extends SpeakeasyBase {
    pathParams: GetSearchVersionNumberRoutedFilterPositionHeadingExtPathParams;
    queryParams: GetSearchVersionNumberRoutedFilterPositionHeadingExtQueryParams;
}
export declare class GetSearchVersionNumberRoutedFilterPositionHeadingExtResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
