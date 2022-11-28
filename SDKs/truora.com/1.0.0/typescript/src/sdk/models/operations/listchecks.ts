import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListChecksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=report_id" })
  reportId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_key" })
  startKey?: string;
}


export class ListChecksSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ListChecksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListChecksQueryParams;

  @SpeakeasyMetadata()
  security: ListChecksSecurity;
}


export class ListChecksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  checksOutput?: shared.ChecksOutput;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
