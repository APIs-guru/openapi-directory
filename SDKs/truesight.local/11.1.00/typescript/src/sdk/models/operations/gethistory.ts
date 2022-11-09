import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetHistoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=applicationId" })
  applicationId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=from" })
  from?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=groupId" })
  groupId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=serviceId" })
  serviceId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=to" })
  to?: number;
}


export class GetHistoryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetHistoryQueryParams;
}


export class GetHistoryResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
