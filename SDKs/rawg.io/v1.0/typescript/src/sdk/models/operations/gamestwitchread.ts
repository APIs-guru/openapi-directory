import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GamesTwitchReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GamesTwitchReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GamesTwitchReadPathParams;
}


export class GamesTwitchReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  twitch?: shared.Twitch;
}
