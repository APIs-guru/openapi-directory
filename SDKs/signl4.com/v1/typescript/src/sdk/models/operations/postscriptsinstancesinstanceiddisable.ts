import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostScriptsInstancesInstanceIdDisablePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=instanceId" })
  instanceId: string;
}


export class PostScriptsInstancesInstanceIdDisableRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostScriptsInstancesInstanceIdDisablePathParams;
}


export class PostScriptsInstancesInstanceIdDisableResponse extends SpeakeasyBase {
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
