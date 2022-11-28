import { SpeakeasyBase } from "../../../internal/utils";
export declare class ResourcesApiGetListPathParams extends SpeakeasyBase {
    cultureCode: string;
}
export declare class ResourcesApiGetListQueryParams extends SpeakeasyBase {
    setNames: string[];
}
export declare class ResourcesApiGetListRequest extends SpeakeasyBase {
    pathParams: ResourcesApiGetListPathParams;
    queryParams: ResourcesApiGetListQueryParams;
}
export declare class ResourcesApiGetListResponse extends SpeakeasyBase {
    contentType: string;
    resourcesApiGetList200ApplicationJsonObject?: Map<string, Map<string, string>>;
    resourcesApiGetList200TextJsonObject?: Map<string, Map<string, string>>;
    statusCode: number;
}
