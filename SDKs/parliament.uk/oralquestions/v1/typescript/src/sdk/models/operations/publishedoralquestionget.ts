import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PublishedOralQuestionGetParametersQuestionTypeEnum {
    Substantive = "Substantive"
,    Topical = "Topical"
}


export class PublishedOralQuestionGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=parameters.answeringBodyIds" })
  parametersAnsweringBodyIds?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=parameters.answeringDateEnd" })
  parametersAnsweringDateEnd?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=parameters.answeringDateStart" })
  parametersAnsweringDateStart?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=parameters.askingMemberIds" })
  parametersAskingMemberIds?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=parameters.oralQuestionTimeId" })
  parametersOralQuestionTimeId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=parameters.questionType" })
  parametersQuestionType?: PublishedOralQuestionGetParametersQuestionTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=parameters.skip" })
  parametersSkip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=parameters.take" })
  parametersTake?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=parameters.uINs" })
  parametersUINs?: number[];
}


export class PublishedOralQuestionGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PublishedOralQuestionGetQueryParams;
}


export class PublishedOralQuestionGetResponse extends SpeakeasyBase {
  @Metadata()
  apiResponseListPublishedWrittenQuestion?: shared.ApiResponseListPublishedWrittenQuestion;

  @Metadata()
  apiResponseObject?: shared.ApiResponseObject;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
