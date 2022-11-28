import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SongApiGetCommentsPathParams extends SpeakeasyBase {
    id: number;
}
export declare class SongApiGetCommentsRequest extends SpeakeasyBase {
    pathParams: SongApiGetCommentsPathParams;
}
export declare class SongApiGetCommentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    commentForApiContracts?: shared.CommentForApiContract[];
    contentType: string;
    statusCode: number;
}
