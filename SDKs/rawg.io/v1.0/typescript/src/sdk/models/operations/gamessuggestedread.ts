import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GamesSuggestedReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GamesSuggestedReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GamesSuggestedReadPathParams;
}


export class GamesSuggestedReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  gameSingle?: shared.GameSingle;

  @SpeakeasyMetadata()
  statusCode: number;
}
