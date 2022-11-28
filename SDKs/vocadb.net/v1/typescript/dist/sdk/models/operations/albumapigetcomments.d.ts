import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AlbumApiGetCommentsPathParams extends SpeakeasyBase {
    id: number;
}
export declare class AlbumApiGetCommentsRequest extends SpeakeasyBase {
    pathParams: AlbumApiGetCommentsPathParams;
}
export declare class AlbumApiGetCommentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    commentForApiContracts?: shared.CommentForApiContract[];
    contentType: string;
    statusCode: number;
}
