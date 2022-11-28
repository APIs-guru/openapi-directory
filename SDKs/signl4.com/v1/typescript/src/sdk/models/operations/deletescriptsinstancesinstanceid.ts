import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteScriptsInstancesInstanceIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=instanceId" })
  instanceId: string;
}


export class DeleteScriptsInstancesInstanceIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteScriptsInstancesInstanceIdPathParams;
}


export class DeleteScriptsInstancesInstanceIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  statusCode: number;
}
