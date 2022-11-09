import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetNominalCodeFromEmployerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=NominalCodeId" })
  nominalCodeId: string;
}


export class GetNominalCodeFromEmployerHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetNominalCodeFromEmployerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNominalCodeFromEmployerPathParams;

  @Metadata()
  headers: GetNominalCodeFromEmployerHeaders;
}


export class GetNominalCodeFromEmployerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  nominalCode?: shared.NominalCode;

  @Metadata()
  statusCode: number;
}
