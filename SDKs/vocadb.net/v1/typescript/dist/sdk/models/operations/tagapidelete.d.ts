import { SpeakeasyBase } from "../../../internal/utils";
export declare class TagApiDeletePathParams extends SpeakeasyBase {
    id: number;
}
export declare class TagApiDeleteQueryParams extends SpeakeasyBase {
    hardDelete?: boolean;
    notes?: string;
}
export declare class TagApiDeleteRequest extends SpeakeasyBase {
    pathParams: TagApiDeletePathParams;
    queryParams: TagApiDeleteQueryParams;
}
export declare class TagApiDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
