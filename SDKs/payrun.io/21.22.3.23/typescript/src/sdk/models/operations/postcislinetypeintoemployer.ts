import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostCisLineTypeIntoEmployerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;
}


export class PostCisLineTypeIntoEmployerHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PostCisLineTypeIntoEmployerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostCisLineTypeIntoEmployerPathParams;

  @Metadata()
  headers: PostCisLineTypeIntoEmployerHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CisLineType;
}


export class PostCisLineTypeIntoEmployerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  link?: shared.Link;

  @Metadata()
  statusCode: number;
}
