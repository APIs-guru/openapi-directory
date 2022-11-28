import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetHistoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=applicationId" })
  applicationId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupId" })
  groupId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serviceId" })
  serviceId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to?: number;
}


export class GetHistoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetHistoryQueryParams;
}


export class GetHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
