import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiWrittenstatementsStatementsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiWrittenstatementsStatementsIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expandMember" })
  expandMember?: boolean;
}


export class GetApiWrittenstatementsStatementsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiWrittenstatementsStatementsIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetApiWrittenstatementsStatementsIdQueryParams;
}


export class GetApiWrittenstatementsStatementsIdResponse extends SpeakeasyBase {
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
