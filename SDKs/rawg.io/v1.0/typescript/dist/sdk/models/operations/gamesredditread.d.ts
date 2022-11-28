import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesRedditReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GamesRedditReadRequest extends SpeakeasyBase {
    pathParams: GamesRedditReadPathParams;
}
export declare class GamesRedditReadResponse extends SpeakeasyBase {
    contentType: string;
    reddit?: shared.Reddit;
    statusCode: number;
}
