import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectsGetObjectsByObjectIdsPathParams extends SpeakeasyBase {
    tenantId: string;
}
export declare class ObjectsGetObjectsByObjectIdsQueryParams extends SpeakeasyBase {
    apiVersion: string;
}
export declare class ObjectsGetObjectsByObjectIdsRequests extends SpeakeasyBase {
    getObjectsParameters?: Map<string, Map<string, any>>;
    getObjectsParameters1?: Map<string, Map<string, any>>;
}
export declare class ObjectsGetObjectsByObjectIdsRequest extends SpeakeasyBase {
    pathParams: ObjectsGetObjectsByObjectIdsPathParams;
    queryParams: ObjectsGetObjectsByObjectIdsQueryParams;
    request: ObjectsGetObjectsByObjectIdsRequests;
}
export declare class ObjectsGetObjectsByObjectIdsResponse extends SpeakeasyBase {
    contentType: string;
    directoryObjectListResult?: shared.DirectoryObjectListResult;
    statusCode: number;
}
