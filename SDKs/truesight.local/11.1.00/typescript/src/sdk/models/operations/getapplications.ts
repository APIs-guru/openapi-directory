import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetApplicationsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}


export class GetApplicationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetApplicationsDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class GetApplicationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetApplicationsQueryParams;
}


export class GetApplicationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
