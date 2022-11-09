import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutCommandsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutCommandsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutCommandsIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Command;
}


export class PutCommandsIdResponse extends SpeakeasyBase {
  @Metadata()
  command?: shared.Command;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
