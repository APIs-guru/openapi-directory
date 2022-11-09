import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiMembersIdWrittenQuestionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiMembersIdWrittenQuestionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;
}


export class GetApiMembersIdWrittenQuestionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiMembersIdWrittenQuestionsPathParams;

  @Metadata()
  queryParams: GetApiMembersIdWrittenQuestionsQueryParams;
}


export class GetApiMembersIdWrittenQuestionsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  writtenQuestionMembersServiceSearchResult?: shared.WrittenQuestionMembersServiceSearchResult;
}
