import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetScriptsInstancesInstanceIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=instanceId" })
  instanceId: string;
}


export class GetScriptsInstancesInstanceIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetScriptsInstancesInstanceIdPathParams;
}


export class GetScriptsInstancesInstanceIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  scriptInstanceDetails?: shared.ScriptInstanceDetails;

  @SpeakeasyMetadata()
  statusCode: number;
}
