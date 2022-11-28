import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCalendarsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=all" })
  all?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: number;
}


export class GetCalendarsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCalendarsQueryParams;
}


export class GetCalendarsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Calendar })
  calendars?: shared.Calendar[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
