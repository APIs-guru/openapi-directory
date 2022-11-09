import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PublishedOralQuestionTimeGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=parameters.answeringBodyIds" })
  parametersAnsweringBodyIds?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=parameters.answeringDateEnd" })
  parametersAnsweringDateEnd?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=parameters.answeringDateStart" })
  parametersAnsweringDateStart?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=parameters.deadlineDateEnd" })
  parametersDeadlineDateEnd?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=parameters.deadlineDateStart" })
  parametersDeadlineDateStart?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=parameters.oralQuestionTimeId" })
  parametersOralQuestionTimeId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=parameters.skip" })
  parametersSkip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=parameters.take" })
  parametersTake?: number;
}


export class PublishedOralQuestionTimeGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PublishedOralQuestionTimeGetQueryParams;
}


export class PublishedOralQuestionTimeGetResponse extends SpeakeasyBase {
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
