import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReleaseEventApiDeletePathParams extends SpeakeasyBase {
    id: number;
}
export declare class ReleaseEventApiDeleteQueryParams extends SpeakeasyBase {
    hardDelete?: boolean;
    notes?: string;
}
export declare class ReleaseEventApiDeleteRequest extends SpeakeasyBase {
    pathParams: ReleaseEventApiDeletePathParams;
    queryParams: ReleaseEventApiDeleteQueryParams;
}
export declare class ReleaseEventApiDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
