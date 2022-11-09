import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutSubContractorIntoEmployerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=SubContractorId" })
  subContractorId: string;
}


export class PutSubContractorIntoEmployerHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PutSubContractorIntoEmployerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutSubContractorIntoEmployerPathParams;

  @Metadata()
  headers: PutSubContractorIntoEmployerHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SubContractor;
}


export class PutSubContractorIntoEmployerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  statusCode: number;

  @Metadata()
  subContractor?: shared.SubContractor;
}
