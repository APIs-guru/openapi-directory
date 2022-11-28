import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class IncrementalRefreshSourcePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class IncrementalRefreshSourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IncrementalRefreshSourcePathParams;
}


export class IncrementalRefreshSourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
