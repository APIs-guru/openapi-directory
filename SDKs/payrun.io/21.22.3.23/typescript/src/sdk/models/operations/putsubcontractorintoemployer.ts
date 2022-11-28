import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutSubContractorIntoEmployerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SubContractorId" })
  subContractorId: string;
}


export class PutSubContractorIntoEmployerHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PutSubContractorIntoEmployerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutSubContractorIntoEmployerPathParams;

  @SpeakeasyMetadata()
  headers: PutSubContractorIntoEmployerHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SubContractor;
}


export class PutSubContractorIntoEmployerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  subContractor?: shared.SubContractor;
}
