import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutDriversIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutDriversIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutDriversIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Driver;
}


export class PutDriversIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  driver?: shared.Driver;

  @SpeakeasyMetadata()
  statusCode: number;
}
