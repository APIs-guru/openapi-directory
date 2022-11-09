import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCisLineTypeFromEmployerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=CisLineTypeId" })
  cisLineTypeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;
}


export class GetCisLineTypeFromEmployerHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetCisLineTypeFromEmployerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCisLineTypeFromEmployerPathParams;

  @Metadata()
  headers: GetCisLineTypeFromEmployerHeaders;
}


export class GetCisLineTypeFromEmployerResponse extends SpeakeasyBase {
  @Metadata()
  cisLineType?: shared.CisLineType;

  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  statusCode: number;
}
