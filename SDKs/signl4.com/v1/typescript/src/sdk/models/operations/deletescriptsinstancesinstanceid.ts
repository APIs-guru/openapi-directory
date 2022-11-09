import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteScriptsInstancesInstanceIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=instanceId" })
  instanceId: string;
}


export class DeleteScriptsInstancesInstanceIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteScriptsInstancesInstanceIdPathParams;
}


export class DeleteScriptsInstancesInstanceIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  statusCode: number;
}
