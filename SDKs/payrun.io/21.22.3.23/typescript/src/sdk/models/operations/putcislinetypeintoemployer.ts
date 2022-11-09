import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutCisLineTypeIntoEmployerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=CisLineTypeId" })
  cisLineTypeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;
}


export class PutCisLineTypeIntoEmployerHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PutCisLineTypeIntoEmployerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutCisLineTypeIntoEmployerPathParams;

  @Metadata()
  headers: PutCisLineTypeIntoEmployerHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CisLineType;
}


export class PutCisLineTypeIntoEmployerResponse extends SpeakeasyBase {
  @Metadata()
  cisLineType?: shared.CisLineType;

  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  statusCode: number;
}
