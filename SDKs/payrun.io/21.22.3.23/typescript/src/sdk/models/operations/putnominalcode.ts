import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutNominalCodePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=NominalCodeId" })
  nominalCodeId: string;
}


export class PutNominalCodeHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PutNominalCodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutNominalCodePathParams;

  @SpeakeasyMetadata()
  headers: PutNominalCodeHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.NominalCode;
}


export class PutNominalCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  nominalCode?: shared.NominalCode;

  @SpeakeasyMetadata()
  statusCode: number;
}
