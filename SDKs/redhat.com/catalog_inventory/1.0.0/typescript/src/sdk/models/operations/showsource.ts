import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ShowSourcePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ShowSourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ShowSourcePathParams;
}


export class ShowSourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorNotFound?: shared.ErrorNotFound;

  @SpeakeasyMetadata()
  source?: shared.Source;

  @SpeakeasyMetadata()
  statusCode: number;
}
