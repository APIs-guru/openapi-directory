import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiWrittenstatementsStatementsDateUinPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: Date;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uin" })
  uin: string;
}


export class GetApiWrittenstatementsStatementsDateUinQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expandMember" })
  expandMember?: boolean;
}


export class GetApiWrittenstatementsStatementsDateUinRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiWrittenstatementsStatementsDateUinPathParams;

  @SpeakeasyMetadata()
  queryParams: GetApiWrittenstatementsStatementsDateUinQueryParams;
}


export class GetApiWrittenstatementsStatementsDateUinResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, Map<string, any>>;

  @SpeakeasyMetadata()
  statementsViewModelItem?: shared.StatementsViewModelItem;

  @SpeakeasyMetadata()
  statusCode: number;
}
