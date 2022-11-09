import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiWrittenstatementsStatementsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiWrittenstatementsStatementsIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=expandMember" })
  expandMember?: boolean;
}


export class GetApiWrittenstatementsStatementsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiWrittenstatementsStatementsIdPathParams;

  @Metadata()
  queryParams: GetApiWrittenstatementsStatementsIdQueryParams;
}


export class GetApiWrittenstatementsStatementsIdResponse extends SpeakeasyBase {
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
