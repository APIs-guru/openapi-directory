import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiWrittenstatementsStatementsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=answeringBodies" })
  answeringBodies?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=expandMember" })
  expandMember?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=house" })
  house?: shared.HouseEnumEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=madeWhenFrom" })
  madeWhenFrom?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=madeWhenTo" })
  madeWhenTo?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=members" })
  members?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=searchTerm" })
  searchTerm?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=take" })
  take?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uIN" })
  uIn?: string;
}


export class GetApiWrittenstatementsStatementsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetApiWrittenstatementsStatementsQueryParams;
}


export class GetApiWrittenstatementsStatementsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, Map<string, any>>;

  @Metadata()
  statementsViewModelSearchResult?: shared.StatementsViewModelSearchResult;

  @Metadata()
  statusCode: number;
}
