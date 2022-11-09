import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiWrittenquestionsQuestionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=answered" })
  answered?: shared.AnsweredEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=answeredWhenFrom" })
  answeredWhenFrom?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=answeredWhenTo" })
  answeredWhenTo?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=answeringBodies" })
  answeringBodies?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=answeringMemberId" })
  answeringMemberId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=askingMemberId" })
  askingMemberId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=correctedWhenFrom" })
  correctedWhenFrom?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=correctedWhenTo" })
  correctedWhenTo?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=expandMember" })
  expandMember?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=house" })
  house?: shared.HouseEnumEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeWithdrawn" })
  includeWithdrawn?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=members" })
  members?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=questionStatus" })
  questionStatus?: shared.QuestionStatusEnumEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=searchTerm" })
  searchTerm?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tabledWhenFrom" })
  tabledWhenFrom?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tabledWhenTo" })
  tabledWhenTo?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=take" })
  take?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uIN" })
  uIn?: string;
}


export class GetApiWrittenquestionsQuestionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetApiWrittenquestionsQuestionsQueryParams;
}


export class GetApiWrittenquestionsQuestionsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, Map<string, any>>;

  @Metadata()
  questionsViewModelSearchResult?: shared.QuestionsViewModelSearchResult;

  @Metadata()
  statusCode: number;
}
