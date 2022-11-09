import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GamesReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GamesReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GamesReadPathParams;
}


export class GamesReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  gameSingle?: shared.GameSingle;

  @Metadata()
  statusCode: number;
}
