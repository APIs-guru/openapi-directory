import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostApiSocialNumberQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=idType" })
  idType: shared.IdTypeEnum;
}


export class PostApiSocialNumberHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Api-Key" })
  xApiKey?: string;
}


export class PostApiSocialNumberRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  numberValidation?: shared.NumberValidation;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  numberValidation1?: shared.NumberValidation;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  numberValidation2?: shared.NumberValidation;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  numberValidation3?: shared.NumberValidation;
}


export class PostApiSocialNumberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostApiSocialNumberQueryParams;

  @SpeakeasyMetadata()
  headers: PostApiSocialNumberHeaders;

  @SpeakeasyMetadata()
  request: PostApiSocialNumberRequests;
}


export class PostApiSocialNumberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
