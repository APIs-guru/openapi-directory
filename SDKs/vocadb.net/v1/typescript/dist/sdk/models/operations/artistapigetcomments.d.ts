import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ArtistApiGetCommentsPathParams extends SpeakeasyBase {
    id: number;
}
export declare class ArtistApiGetCommentsRequest extends SpeakeasyBase {
    pathParams: ArtistApiGetCommentsPathParams;
}
export declare class ArtistApiGetCommentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    commentForApiContracts?: shared.CommentForApiContract[];
    contentType: string;
    statusCode: number;
}
