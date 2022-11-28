import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiWrittenquestionsQuestionsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiWrittenquestionsQuestionsIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expandMember" })
  expandMember?: boolean;
}


export class GetApiWrittenquestionsQuestionsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiWrittenquestionsQuestionsIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetApiWrittenquestionsQuestionsIdQueryParams;
}


export class GetApiWrittenquestionsQuestionsIdResponse extends SpeakeasyBase {
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
