import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostApiTextTransformQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=caseType" })
  caseType?: shared.CaseTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=find" })
  find?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=replace" })
  replace?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=textActionType" })
  textActionType: shared.TextActionTypeEnum;
}


export class PostApiTextTransformHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Api-Key" })
  xApiKey?: string;
}


export class PostApiTextTransformRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  textDto?: shared.TextDto;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  textDto1?: shared.TextDto;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  textDto2?: shared.TextDto;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  textDto3?: shared.TextDto;
}


export class PostApiTextTransformRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostApiTextTransformQueryParams;

  @SpeakeasyMetadata()
  headers: PostApiTextTransformHeaders;

  @SpeakeasyMetadata()
  request: PostApiTextTransformRequests;
}


export class PostApiTextTransformResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
