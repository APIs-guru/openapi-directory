import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GenresReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GenresReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GenresReadPathParams;
}


export class GenresReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  genreSingle?: shared.GenreSingle;

  @Metadata()
  statusCode: number;
}
