import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetServicesDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}


export class GetServicesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetServicesDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class GetServicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetServicesQueryParams;
}


export class GetServicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
