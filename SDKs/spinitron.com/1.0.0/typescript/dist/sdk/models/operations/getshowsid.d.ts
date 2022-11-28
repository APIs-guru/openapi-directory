import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetShowsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetShowsIdQueryParams extends SpeakeasyBase {
    expand?: string[];
    fields?: string[];
}
export declare class GetShowsIdRequest extends SpeakeasyBase {
    pathParams: GetShowsIdPathParams;
    queryParams: GetShowsIdQueryParams;
}
export declare class GetShowsIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    error?: shared.Error;
    show?: shared.Show;
    statusCode: number;
}
