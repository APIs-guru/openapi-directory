import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RefreshSourcePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class RefreshSourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RefreshSourcePathParams;
}


export class RefreshSourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
