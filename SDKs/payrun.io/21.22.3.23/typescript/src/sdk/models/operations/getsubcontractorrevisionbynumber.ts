import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSubContractorRevisionByNumberPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=RevisionNumber" })
  revisionNumber: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SubContractorId" })
  subContractorId: string;
}


export class GetSubContractorRevisionByNumberHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetSubContractorRevisionByNumberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSubContractorRevisionByNumberPathParams;

  @SpeakeasyMetadata()
  headers: GetSubContractorRevisionByNumberHeaders;
}


export class GetSubContractorRevisionByNumberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  subContractor?: shared.SubContractor;
}
