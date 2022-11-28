import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetQuestionsNoAnswersOrderEnum {
    Desc = "desc",
    Asc = "asc"
}

export enum GetQuestionsNoAnswersSortEnum {
    Activity = "activity",
    Creation = "creation",
    Votes = "votes"
}


export class GetQuestionsNoAnswersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" })
  fromdate?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" })
  max?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min" })
  min?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: GetQuestionsNoAnswersOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" })
  site: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetQuestionsNoAnswersSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagged" })
  tagged?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: number;
}


export class GetQuestionsNoAnswersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetQuestionsNoAnswersQueryParams;
}


export class GetQuestionsNoAnswersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
