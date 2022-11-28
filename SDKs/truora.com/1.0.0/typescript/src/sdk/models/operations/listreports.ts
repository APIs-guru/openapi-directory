import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListReportsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_key" })
  startKey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=username" })
  username?: string;
}


export class ListReportsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListReportsQueryParams;
}


export class ListReportsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  reportsOutput?: shared.ReportsOutput;

  @SpeakeasyMetadata()
  statusCode: number;
}
