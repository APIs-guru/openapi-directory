import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVideoCategoriesPathParams extends SpeakeasyBase {
    videoId: number;
}
export declare class GetVideoCategoriesRequest extends SpeakeasyBase {
    pathParams: GetVideoCategoriesPathParams;
}
export declare class GetVideoCategoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    categories?: shared.Category[];
    legacyError?: shared.LegacyError;
}
