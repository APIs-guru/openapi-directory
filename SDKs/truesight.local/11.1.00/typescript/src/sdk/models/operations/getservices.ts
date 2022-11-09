import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetServicesDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}


export class GetServicesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetServicesDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class GetServicesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetServicesQueryParams;
}


export class GetServicesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
