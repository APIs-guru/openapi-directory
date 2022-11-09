import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSubContractorsByEffectiveDatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EffectiveDate" })
  effectiveDate: Date;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;
}


export class GetSubContractorsByEffectiveDateHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetSubContractorsByEffectiveDateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSubContractorsByEffectiveDatePathParams;

  @Metadata()
  headers: GetSubContractorsByEffectiveDateHeaders;
}


export class GetSubContractorsByEffectiveDateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  linkCollection?: shared.LinkCollection;

  @Metadata()
  statusCode: number;
}
