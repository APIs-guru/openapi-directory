import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostScriptsInstancesRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  scriptInstanceDetails?: shared.ScriptInstanceDetails;

  @Metadata({ data: "request, media_type=application/json" })
  scriptInstanceDetails1?: shared.ScriptInstanceDetails;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  scriptInstanceDetails2?: shared.ScriptInstanceDetails;

  @Metadata({ data: "request, media_type=text/json" })
  scriptInstanceDetails3?: shared.ScriptInstanceDetails;
}


export class PostScriptsInstancesRequest extends SpeakeasyBase {
  @Metadata()
  request?: PostScriptsInstancesRequests;
}


export class PostScriptsInstancesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  scriptInstanceDetails?: shared.ScriptInstanceDetails;

  @Metadata()
  statusCode: number;
}
