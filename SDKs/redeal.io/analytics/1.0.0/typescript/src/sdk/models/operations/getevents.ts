import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetEventsTypeEnum {
    All = "all"
,    Clicks = "clicks"
,    Contacts = "contacts"
}


export class GetEventsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=company" })
  company?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=deal" })
  deal?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nexttoken" })
  nexttoken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=queryexecutionid" })
  queryexecutionid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site" })
  site?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: GetEventsTypeEnum;
}


export class GetEventsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetEventsQueryParams;
}


export class GetEventsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.EventRecord })
  eventRecords?: shared.EventRecord[];

  @Metadata()
  statusCode: number;
}
