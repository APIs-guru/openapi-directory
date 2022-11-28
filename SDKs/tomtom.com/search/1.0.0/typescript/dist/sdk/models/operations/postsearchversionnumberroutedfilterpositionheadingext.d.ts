import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSearchVersionNumberRoutedFilterPositionHeadingExtPathParams extends SpeakeasyBase {
    ext: shared.ExtEnum;
    heading: number;
    position: string;
    versionNumber: number;
}
export declare class PostSearchVersionNumberRoutedFilterPositionHeadingExtQueryParams extends SpeakeasyBase {
    routingTimeout?: number;
}
export declare class PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListAddress extends SpeakeasyBase {
    freeformAddress?: string;
}
export declare class PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPoi extends SpeakeasyBase {
    name?: string;
}
export declare class PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPosition extends SpeakeasyBase {
    lat?: number;
    lon?: number;
}
export declare class PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiList extends SpeakeasyBase {
    address?: PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListAddress;
    poi?: PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPoi;
    position?: PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPosition;
}
export declare class PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBody extends SpeakeasyBase {
    poiList?: PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiList[];
}
export declare class PostSearchVersionNumberRoutedFilterPositionHeadingExtRequest extends SpeakeasyBase {
    pathParams: PostSearchVersionNumberRoutedFilterPositionHeadingExtPathParams;
    queryParams: PostSearchVersionNumberRoutedFilterPositionHeadingExtQueryParams;
    request?: PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBody;
}
export declare class PostSearchVersionNumberRoutedFilterPositionHeadingExtResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
