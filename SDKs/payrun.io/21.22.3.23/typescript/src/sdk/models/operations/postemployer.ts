import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostEmployerHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PostEmployerRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostEmployerHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Employer;
}


export class PostEmployerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  link?: shared.Link;

  @Metadata()
  statusCode: number;
}
