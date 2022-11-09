import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GamesTwitchReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GamesTwitchReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GamesTwitchReadPathParams;
}


export class GamesTwitchReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  twitch?: shared.Twitch;
}
