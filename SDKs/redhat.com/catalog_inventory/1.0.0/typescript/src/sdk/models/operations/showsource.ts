import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ShowSourcePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ShowSourceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ShowSourcePathParams;
}


export class ShowSourceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorNotFound?: shared.ErrorNotFound;

  @Metadata()
  source?: shared.Source;

  @Metadata()
  statusCode: number;
}
