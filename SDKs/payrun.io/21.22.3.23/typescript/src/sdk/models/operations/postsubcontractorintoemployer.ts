import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostSubContractorIntoEmployerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;
}


export class PostSubContractorIntoEmployerHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PostSubContractorIntoEmployerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostSubContractorIntoEmployerPathParams;

  @SpeakeasyMetadata()
  headers: PostSubContractorIntoEmployerHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SubContractor;
}


export class PostSubContractorIntoEmployerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  link?: shared.Link;

  @SpeakeasyMetadata()
  statusCode: number;
}
