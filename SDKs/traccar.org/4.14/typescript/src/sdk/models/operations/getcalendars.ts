import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCalendarsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=all" })
  all?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: number;
}


export class GetCalendarsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCalendarsQueryParams;
}


export class GetCalendarsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.Calendar })
  calendars?: shared.Calendar[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
