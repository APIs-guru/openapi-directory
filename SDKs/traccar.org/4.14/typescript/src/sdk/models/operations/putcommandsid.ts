import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutCommandsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutCommandsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutCommandsIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Command;
}


export class PutCommandsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  command?: shared.Command;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
