import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetSearchVersionNumberAdditionalDataExtExtEnum {
    Json = "json"
}
export declare class GetSearchVersionNumberAdditionalDataExtPathParams extends SpeakeasyBase {
    ext: GetSearchVersionNumberAdditionalDataExtExtEnum;
    versionNumber: number;
}
export declare class GetSearchVersionNumberAdditionalDataExtQueryParams extends SpeakeasyBase {
    geometries: string;
    geometriesZoom?: number;
}
export declare class GetSearchVersionNumberAdditionalDataExtRequest extends SpeakeasyBase {
    pathParams: GetSearchVersionNumberAdditionalDataExtPathParams;
    queryParams: GetSearchVersionNumberAdditionalDataExtQueryParams;
}
export declare class GetSearchVersionNumberAdditionalDataExtResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
