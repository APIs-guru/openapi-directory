import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiWrittenquestionsQuestionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=answered" })
  answered?: shared.AnsweredEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=answeredWhenFrom" })
  answeredWhenFrom?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=answeredWhenTo" })
  answeredWhenTo?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=answeringBodies" })
  answeringBodies?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=answeringMemberId" })
  answeringMemberId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=askingMemberId" })
  askingMemberId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=correctedWhenFrom" })
  correctedWhenFrom?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=correctedWhenTo" })
  correctedWhenTo?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expandMember" })
  expandMember?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=house" })
  house?: shared.HouseEnumEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeWithdrawn" })
  includeWithdrawn?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=members" })
  members?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=questionStatus" })
  questionStatus?: shared.QuestionStatusEnumEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchTerm" })
  searchTerm?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tabledWhenFrom" })
  tabledWhenFrom?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tabledWhenTo" })
  tabledWhenTo?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=take" })
  take?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uIN" })
  uIn?: string;
}


export class GetApiWrittenquestionsQuestionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetApiWrittenquestionsQuestionsQueryParams;
}


export class GetApiWrittenquestionsQuestionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, Map<string, any>>;

  @SpeakeasyMetadata()
  questionsViewModelSearchResult?: shared.QuestionsViewModelSearchResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
