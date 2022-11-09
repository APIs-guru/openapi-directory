import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class IncrementalRefreshSourcePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class IncrementalRefreshSourceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IncrementalRefreshSourcePathParams;
}


export class IncrementalRefreshSourceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
