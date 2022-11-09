import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiWrittenstatementsStatementsDateUinPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: Date;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=uin" })
  uin: string;
}


export class GetApiWrittenstatementsStatementsDateUinQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=expandMember" })
  expandMember?: boolean;
}


export class GetApiWrittenstatementsStatementsDateUinRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiWrittenstatementsStatementsDateUinPathParams;

  @Metadata()
  queryParams: GetApiWrittenstatementsStatementsDateUinQueryParams;
}


export class GetApiWrittenstatementsStatementsDateUinResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, Map<string, any>>;

  @Metadata()
  statementsViewModelItem?: shared.StatementsViewModelItem;

  @Metadata()
  statusCode: number;
}
