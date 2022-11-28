import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PublishedOralQuestionGetParametersQuestionTypeEnum {
    Substantive = "Substantive",
    Topical = "Topical"
}


export class PublishedOralQuestionGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.answeringBodyIds" })
  parametersAnsweringBodyIds?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.answeringDateEnd" })
  parametersAnsweringDateEnd?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.answeringDateStart" })
  parametersAnsweringDateStart?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.askingMemberIds" })
  parametersAskingMemberIds?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.oralQuestionTimeId" })
  parametersOralQuestionTimeId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.questionType" })
  parametersQuestionType?: PublishedOralQuestionGetParametersQuestionTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.skip" })
  parametersSkip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.take" })
  parametersTake?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.uINs" })
  parametersUINs?: number[];
}


export class PublishedOralQuestionGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PublishedOralQuestionGetQueryParams;
}


export class PublishedOralQuestionGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiResponseListPublishedWrittenQuestion?: shared.ApiResponseListPublishedWrittenQuestion;

  @SpeakeasyMetadata()
  apiResponseObject?: shared.ApiResponseObject;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
