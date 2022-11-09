import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GamesYoutubeReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GamesYoutubeReadRequest extends SpeakeasyBase {
    pathParams: GamesYoutubeReadPathParams;
}
export declare class GamesYoutubeReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    youtube?: shared.Youtube;
}
