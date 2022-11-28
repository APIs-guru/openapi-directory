import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeletePayCodeRevisionByNumberPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=PayCodeId" })
  payCodeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=RevisionNumber" })
  revisionNumber: string;
}


export class DeletePayCodeRevisionByNumberHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class DeletePayCodeRevisionByNumberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeletePayCodeRevisionByNumberPathParams;

  @SpeakeasyMetadata()
  headers: DeletePayCodeRevisionByNumberHeaders;
}


export class DeletePayCodeRevisionByNumberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
