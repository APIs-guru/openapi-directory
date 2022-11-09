import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostSubContractorIntoEmployerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;
}


export class PostSubContractorIntoEmployerHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PostSubContractorIntoEmployerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostSubContractorIntoEmployerPathParams;

  @Metadata()
  headers: PostSubContractorIntoEmployerHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SubContractor;
}


export class PostSubContractorIntoEmployerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  link?: shared.Link;

  @Metadata()
  statusCode: number;
}
