import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostApiSocialNumberQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=idType" })
  idType: shared.IdTypeEnum;
}


export class PostApiSocialNumberHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Api-Key" })
  xApiKey?: string;
}


export class PostApiSocialNumberRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  numberValidation?: shared.NumberValidation;

  @Metadata({ data: "request, media_type=application/json" })
  numberValidation1?: shared.NumberValidation;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  numberValidation2?: shared.NumberValidation;

  @Metadata({ data: "request, media_type=text/json" })
  numberValidation3?: shared.NumberValidation;
}


export class PostApiSocialNumberRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostApiSocialNumberQueryParams;

  @Metadata()
  headers: PostApiSocialNumberHeaders;

  @Metadata()
  request: PostApiSocialNumberRequests;
}


export class PostApiSocialNumberResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
