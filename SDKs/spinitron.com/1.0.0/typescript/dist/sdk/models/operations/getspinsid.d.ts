import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSpinsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetSpinsIdQueryParams extends SpeakeasyBase {
    expand?: string[];
    fields?: string[];
}
export declare class GetSpinsIdRequest extends SpeakeasyBase {
    pathParams: GetSpinsIdPathParams;
    queryParams: GetSpinsIdQueryParams;
}
export declare class GetSpinsIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    error?: shared.Error;
    spin?: shared.Spin;
    statusCode: number;
}
