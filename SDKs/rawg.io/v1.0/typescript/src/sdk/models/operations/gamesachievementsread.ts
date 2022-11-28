import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GamesAchievementsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GamesAchievementsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GamesAchievementsReadPathParams;
}


export class GamesAchievementsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  parentAchievement?: shared.ParentAchievement;

  @SpeakeasyMetadata()
  statusCode: number;
}
