import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSearchVersionNumberReverseGeocodePositionExtPathParams extends SpeakeasyBase {
    ext: shared.ExtEnum;
    position: string;
    versionNumber: number;
}
export declare class GetSearchVersionNumberReverseGeocodePositionExtQueryParams extends SpeakeasyBase {
    callback?: string;
    heading?: number;
    number?: string;
    radius?: number;
    returnRoadUse?: boolean;
    returnSpeedLimit?: boolean;
    roadUse?: string;
    spatialKeys?: boolean;
}
export declare class GetSearchVersionNumberReverseGeocodePositionExtRequest extends SpeakeasyBase {
    pathParams: GetSearchVersionNumberReverseGeocodePositionExtPathParams;
    queryParams: GetSearchVersionNumberReverseGeocodePositionExtQueryParams;
}
export declare class GetSearchVersionNumberReverseGeocodePositionExtResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
