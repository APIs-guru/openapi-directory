import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSearchVersionNumberGeometryFilterExtPathParams extends SpeakeasyBase {
    ext: shared.ExtEnum;
    versionNumber: number;
}
export declare class GetSearchVersionNumberGeometryFilterExtQueryParams extends SpeakeasyBase {
    geometryList: string;
    poiList: string;
}
export declare class GetSearchVersionNumberGeometryFilterExtRequest extends SpeakeasyBase {
    pathParams: GetSearchVersionNumberGeometryFilterExtPathParams;
    queryParams: GetSearchVersionNumberGeometryFilterExtQueryParams;
}
export declare class GetSearchVersionNumberGeometryFilterExtResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
