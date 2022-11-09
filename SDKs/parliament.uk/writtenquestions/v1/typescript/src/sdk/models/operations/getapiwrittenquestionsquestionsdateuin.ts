import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiWrittenquestionsQuestionsDateUinPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: Date;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=uin" })
  uin: string;
}


export class GetApiWrittenquestionsQuestionsDateUinQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=expandMember" })
  expandMember?: boolean;
}


export class GetApiWrittenquestionsQuestionsDateUinRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiWrittenquestionsQuestionsDateUinPathParams;

  @Metadata()
  queryParams: GetApiWrittenquestionsQuestionsDateUinQueryParams;
}


export class GetApiWrittenquestionsQuestionsDateUinResponse extends SpeakeasyBase {
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
