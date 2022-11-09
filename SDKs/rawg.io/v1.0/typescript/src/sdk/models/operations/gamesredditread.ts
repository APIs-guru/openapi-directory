import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GamesRedditReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GamesRedditReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GamesRedditReadPathParams;
}


export class GamesRedditReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  reddit?: shared.Reddit;

  @Metadata()
  statusCode: number;
}
