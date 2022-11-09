import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetApplicationsDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}


export class GetApplicationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetApplicationsDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class GetApplicationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetApplicationsQueryParams;
}


export class GetApplicationsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
