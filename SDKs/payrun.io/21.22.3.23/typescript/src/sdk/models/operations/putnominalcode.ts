import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutNominalCodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=NominalCodeId" })
  nominalCodeId: string;
}


export class PutNominalCodeHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PutNominalCodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutNominalCodePathParams;

  @Metadata()
  headers: PutNominalCodeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.NominalCode;
}


export class PutNominalCodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  nominalCode?: shared.NominalCode;

  @Metadata()
  statusCode: number;
}
