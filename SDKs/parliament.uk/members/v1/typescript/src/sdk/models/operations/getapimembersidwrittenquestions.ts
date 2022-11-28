import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiMembersIdWrittenQuestionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiMembersIdWrittenQuestionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;
}


export class GetApiMembersIdWrittenQuestionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiMembersIdWrittenQuestionsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetApiMembersIdWrittenQuestionsQueryParams;
}


export class GetApiMembersIdWrittenQuestionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  writtenQuestionMembersServiceSearchResult?: shared.WrittenQuestionMembersServiceSearchResult;
}
