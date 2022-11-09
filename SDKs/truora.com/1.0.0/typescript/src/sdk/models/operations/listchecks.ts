import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListChecksQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=report_id" })
  reportId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start_key" })
  startKey?: string;
}


export class ListChecksSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ListChecksRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListChecksQueryParams;

  @Metadata()
  security: ListChecksSecurity;
}


export class ListChecksResponse extends SpeakeasyBase {
  @Metadata()
  checksOutput?: shared.ChecksOutput;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
