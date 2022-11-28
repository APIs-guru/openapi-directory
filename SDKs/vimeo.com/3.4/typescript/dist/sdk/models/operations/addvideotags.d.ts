import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddVideoTagsPathParams extends SpeakeasyBase {
    videoId: number;
}
export declare class AddVideoTagsRequestBody extends SpeakeasyBase {
    name: string;
    page?: number;
    perPage?: number;
}
export declare class AddVideoTagsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class AddVideoTagsRequest extends SpeakeasyBase {
    pathParams: AddVideoTagsPathParams;
    request: AddVideoTagsRequestBody;
    security: AddVideoTagsSecurity;
}
export declare class AddVideoTagsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    tags?: shared.Tag[];
}
