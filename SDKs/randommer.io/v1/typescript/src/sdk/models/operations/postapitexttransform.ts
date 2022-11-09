import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostApiTextTransformQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=caseType" })
  caseType?: shared.CaseTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=find" })
  find?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=replace" })
  replace?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=textActionType" })
  textActionType: shared.TextActionTypeEnum;
}


export class PostApiTextTransformHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Api-Key" })
  xApiKey?: string;
}


export class PostApiTextTransformRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  textDto?: shared.TextDto;

  @Metadata({ data: "request, media_type=application/json" })
  textDto1?: shared.TextDto;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  textDto2?: shared.TextDto;

  @Metadata({ data: "request, media_type=text/json" })
  textDto3?: shared.TextDto;
}


export class PostApiTextTransformRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostApiTextTransformQueryParams;

  @Metadata()
  headers: PostApiTextTransformHeaders;

  @Metadata()
  request: PostApiTextTransformRequests;
}


export class PostApiTextTransformResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
