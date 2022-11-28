import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GamesRedditReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GamesRedditReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GamesRedditReadPathParams;
}


export class GamesRedditReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  reddit?: shared.Reddit;

  @SpeakeasyMetadata()
  statusCode: number;
}
