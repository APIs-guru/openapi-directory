import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PublishedOralQuestionTimeGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.answeringBodyIds" })
  parametersAnsweringBodyIds?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.answeringDateEnd" })
  parametersAnsweringDateEnd?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.answeringDateStart" })
  parametersAnsweringDateStart?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.deadlineDateEnd" })
  parametersDeadlineDateEnd?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.deadlineDateStart" })
  parametersDeadlineDateStart?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.oralQuestionTimeId" })
  parametersOralQuestionTimeId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.skip" })
  parametersSkip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameters.take" })
  parametersTake?: number;
}


export class PublishedOralQuestionTimeGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PublishedOralQuestionTimeGetQueryParams;
}


export class PublishedOralQuestionTimeGetResponse extends SpeakeasyBase {
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
