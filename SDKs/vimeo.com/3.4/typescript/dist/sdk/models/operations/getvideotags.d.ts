import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVideoTagsPathParams extends SpeakeasyBase {
    videoId: number;
}
export declare class GetVideoTagsRequest extends SpeakeasyBase {
    pathParams: GetVideoTagsPathParams;
}
export declare class GetVideoTagsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tags?: shared.Tag[];
}
