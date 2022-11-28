import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GenresReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GenresReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GenresReadPathParams;
}


export class GenresReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  genreSingle?: shared.GenreSingle;

  @SpeakeasyMetadata()
  statusCode: number;
}
