import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GamesTwitchReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GamesTwitchReadRequest extends SpeakeasyBase {
    pathParams: GamesTwitchReadPathParams;
}
export declare class GamesTwitchReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    twitch?: shared.Twitch;
}
