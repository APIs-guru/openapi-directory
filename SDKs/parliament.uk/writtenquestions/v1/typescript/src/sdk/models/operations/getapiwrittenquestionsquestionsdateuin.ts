import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiWrittenquestionsQuestionsDateUinPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: Date;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uin" })
  uin: string;
}


export class GetApiWrittenquestionsQuestionsDateUinQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expandMember" })
  expandMember?: boolean;
}


export class GetApiWrittenquestionsQuestionsDateUinRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiWrittenquestionsQuestionsDateUinPathParams;

  @SpeakeasyMetadata()
  queryParams: GetApiWrittenquestionsQuestionsDateUinQueryParams;
}


export class GetApiWrittenquestionsQuestionsDateUinResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, Map<string, any>>;

  @SpeakeasyMetadata()
  questionsViewModelItem?: shared.QuestionsViewModelItem;

  @SpeakeasyMetadata()
  statusCode: number;
}
