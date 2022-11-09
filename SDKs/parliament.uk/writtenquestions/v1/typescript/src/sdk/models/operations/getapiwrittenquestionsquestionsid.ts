import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiWrittenquestionsQuestionsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiWrittenquestionsQuestionsIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=expandMember" })
  expandMember?: boolean;
}


export class GetApiWrittenquestionsQuestionsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiWrittenquestionsQuestionsIdPathParams;

  @Metadata()
  queryParams: GetApiWrittenquestionsQuestionsIdQueryParams;
}


export class GetApiWrittenquestionsQuestionsIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, Map<string, any>>;

  @Metadata()
  questionsViewModelItem?: shared.QuestionsViewModelItem;

  @Metadata()
  statusCode: number;
}
