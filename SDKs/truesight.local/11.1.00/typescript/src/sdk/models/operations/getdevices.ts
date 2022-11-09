import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDevicesDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}


export class GetDevicesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=applicationId" })
  applicationId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetDevicesDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=groupId" })
  groupId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=serviceId" })
  serviceId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class GetDevicesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDevicesQueryParams;
}


export class GetDevicesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
