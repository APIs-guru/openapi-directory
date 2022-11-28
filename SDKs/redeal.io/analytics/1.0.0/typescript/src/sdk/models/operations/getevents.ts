import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetEventsTypeEnum {
    All = "all",
    Clicks = "clicks",
    Contacts = "contacts"
}


export class GetEventsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=company" })
  company?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deal" })
  deal?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nexttoken" })
  nexttoken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=queryexecutionid" })
  queryexecutionid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" })
  site?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: GetEventsTypeEnum;
}


export class GetEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetEventsQueryParams;
}


export class GetEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.EventRecord })
  eventRecords?: shared.EventRecord[];

  @SpeakeasyMetadata()
  statusCode: number;
}
