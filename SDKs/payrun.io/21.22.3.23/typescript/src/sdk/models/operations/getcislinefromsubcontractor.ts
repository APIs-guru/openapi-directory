import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCisLineFromSubContractorPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=CisLineId" })
  cisLineId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=SubContractorId" })
  subContractorId: string;
}


export class GetCisLineFromSubContractorHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetCisLineFromSubContractorRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCisLineFromSubContractorPathParams;

  @Metadata()
  headers: GetCisLineFromSubContractorHeaders;
}


export class GetCisLineFromSubContractorResponse extends SpeakeasyBase {
  @Metadata()
  cisLine?: shared.CisLine;

  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  statusCode: number;
}
