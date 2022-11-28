import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiWrittenstatementsStatementsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=answeringBodies" })
  answeringBodies?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expandMember" })
  expandMember?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=house" })
  house?: shared.HouseEnumEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=madeWhenFrom" })
  madeWhenFrom?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=madeWhenTo" })
  madeWhenTo?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=members" })
  members?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchTerm" })
  searchTerm?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=take" })
  take?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uIN" })
  uIn?: string;
}


export class GetApiWrittenstatementsStatementsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetApiWrittenstatementsStatementsQueryParams;
}


export class GetApiWrittenstatementsStatementsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, Map<string, any>>;

  @SpeakeasyMetadata()
  statementsViewModelSearchResult?: shared.StatementsViewModelSearchResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
