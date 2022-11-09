import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPensionRevisionByNumberPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=PensionId" })
  pensionId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=RevisionNumber" })
  revisionNumber: string;
}


export class GetPensionRevisionByNumberHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetPensionRevisionByNumberRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPensionRevisionByNumberPathParams;

  @Metadata()
  headers: GetPensionRevisionByNumberHeaders;
}


export class GetPensionRevisionByNumberResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  pension?: shared.Pension;

  @Metadata()
  statusCode: number;
}
