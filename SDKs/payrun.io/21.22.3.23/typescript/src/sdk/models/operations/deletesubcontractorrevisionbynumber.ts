import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteSubContractorRevisionByNumberPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=RevisionNumber" })
  revisionNumber: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=SubContractorId" })
  subContractorId: string;
}


export class DeleteSubContractorRevisionByNumberHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class DeleteSubContractorRevisionByNumberRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteSubContractorRevisionByNumberPathParams;

  @Metadata()
  headers: DeleteSubContractorRevisionByNumberHeaders;
}


export class DeleteSubContractorRevisionByNumberResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  statusCode: number;
}
