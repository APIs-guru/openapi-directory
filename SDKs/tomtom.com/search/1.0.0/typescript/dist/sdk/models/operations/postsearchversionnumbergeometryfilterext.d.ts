import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSearchVersionNumberGeometryFilterExtPathParams extends SpeakeasyBase {
    ext: shared.ExtEnum;
    versionNumber: number;
}
export declare class PostSearchVersionNumberGeometryFilterExtRequestBodyGeometryList extends SpeakeasyBase {
    position?: string;
    radius?: number;
    type?: string;
    vertices?: string[];
}
export declare class PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListAddress extends SpeakeasyBase {
    freeformAddress?: string;
}
export declare class PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPoi extends SpeakeasyBase {
    name?: string;
}
export declare class PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPosition extends SpeakeasyBase {
    lat?: number;
    lon?: number;
}
export declare class PostSearchVersionNumberGeometryFilterExtRequestBodyPoiList extends SpeakeasyBase {
    address?: PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListAddress;
    poi?: PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPoi;
    position?: PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPosition;
}
export declare class PostSearchVersionNumberGeometryFilterExtRequestBody extends SpeakeasyBase {
    geometryList?: PostSearchVersionNumberGeometryFilterExtRequestBodyGeometryList[];
    poiList?: PostSearchVersionNumberGeometryFilterExtRequestBodyPoiList[];
}
export declare class PostSearchVersionNumberGeometryFilterExtRequest extends SpeakeasyBase {
    pathParams: PostSearchVersionNumberGeometryFilterExtPathParams;
    request?: PostSearchVersionNumberGeometryFilterExtRequestBody;
}
export declare class PostSearchVersionNumberGeometryFilterExtResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
