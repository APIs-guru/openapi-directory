import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtPathParams extends SpeakeasyBase {
    ext: shared.ExtEnum;
    position: string;
    versionNumber: number;
}
export declare class GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtQueryParams extends SpeakeasyBase {
    heading?: number;
    language?: string;
    limit?: number;
    radius?: number;
    spatialKeys?: boolean;
}
export declare class GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtRequest extends SpeakeasyBase {
    pathParams: GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtPathParams;
    queryParams: GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtQueryParams;
}
export declare class GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
