import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GamesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GamesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GamesReadPathParams;
}


export class GamesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  gameSingle?: shared.GameSingle;

  @SpeakeasyMetadata()
  statusCode: number;
}
