import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEmployersByEffectiveDatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EffectiveDate" })
  effectiveDate: Date;
}


export class GetEmployersByEffectiveDateHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetEmployersByEffectiveDateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEmployersByEffectiveDatePathParams;

  @Metadata()
  headers: GetEmployersByEffectiveDateHeaders;
}


export class GetEmployersByEffectiveDateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  linkCollection?: shared.LinkCollection;

  @Metadata()
  statusCode: number;
}
