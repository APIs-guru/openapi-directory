import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesAchievementsReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GamesAchievementsReadRequest extends SpeakeasyBase {
    pathParams: GamesAchievementsReadPathParams;
}
export declare class GamesAchievementsReadResponse extends SpeakeasyBase {
    contentType: string;
    parentAchievement?: shared.ParentAchievement;
    statusCode: number;
}
