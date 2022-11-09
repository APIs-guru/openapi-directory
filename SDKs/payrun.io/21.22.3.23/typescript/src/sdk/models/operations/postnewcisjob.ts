import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostNewCisJobHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PostNewCisJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostNewCisJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CisJobInstructionBase;
}


export class PostNewCisJobResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  link?: shared.Link;

  @Metadata()
  statusCode: number;
}
