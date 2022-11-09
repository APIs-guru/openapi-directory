import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GamesSuggestedReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GamesSuggestedReadRequest extends SpeakeasyBase {
    pathParams: GamesSuggestedReadPathParams;
}
export declare class GamesSuggestedReadResponse extends SpeakeasyBase {
    contentType: string;
    gameSingle?: shared.GameSingle;
    statusCode: number;
}
