import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchDevicesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=applicationId" })
  applicationId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupId" })
  groupId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchTerms" })
  searchTerms: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serviceId" })
  serviceId?: string;
}


export class SearchDevicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchDevicesQueryParams;
}


export class SearchDevicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
