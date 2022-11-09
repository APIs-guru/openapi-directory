import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListReportsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=start_key" })
  startKey?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=username" })
  username?: string;
}


export class ListReportsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListReportsQueryParams;
}


export class ListReportsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  reportsOutput?: shared.ReportsOutput;

  @Metadata()
  statusCode: number;
}
