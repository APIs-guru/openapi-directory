import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostScriptsInstancesRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  scriptInstanceDetails?: shared.ScriptInstanceDetails;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  scriptInstanceDetails1?: shared.ScriptInstanceDetails;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  scriptInstanceDetails2?: shared.ScriptInstanceDetails;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  scriptInstanceDetails3?: shared.ScriptInstanceDetails;
}


export class PostScriptsInstancesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: PostScriptsInstancesRequests;
}


export class PostScriptsInstancesResponse extends SpeakeasyBase {
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
