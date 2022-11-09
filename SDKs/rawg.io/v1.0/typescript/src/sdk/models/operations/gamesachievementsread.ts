import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GamesAchievementsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GamesAchievementsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GamesAchievementsReadPathParams;
}


export class GamesAchievementsReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  parentAchievement?: shared.ParentAchievement;

  @Metadata()
  statusCode: number;
}
