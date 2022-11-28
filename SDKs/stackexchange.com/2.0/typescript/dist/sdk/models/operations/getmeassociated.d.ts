import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetMeAssociatedQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    page?: number;
    pagesize?: number;
}
export declare class GetMeAssociatedRequest extends SpeakeasyBase {
    queryParams: GetMeAssociatedQueryParams;
}
export declare class GetMeAssociatedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
