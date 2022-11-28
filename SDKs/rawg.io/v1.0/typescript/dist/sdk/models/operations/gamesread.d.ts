import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GamesReadRequest extends SpeakeasyBase {
    pathParams: GamesReadPathParams;
}
export declare class GamesReadResponse extends SpeakeasyBase {
    contentType: string;
    gameSingle?: shared.GameSingle;
    statusCode: number;
}
