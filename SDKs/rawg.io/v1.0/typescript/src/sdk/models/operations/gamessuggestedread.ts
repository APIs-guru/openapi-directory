import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GamesSuggestedReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GamesSuggestedReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GamesSuggestedReadPathParams;
}


export class GamesSuggestedReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  gameSingle?: shared.GameSingle;

  @Metadata()
  statusCode: number;
}
