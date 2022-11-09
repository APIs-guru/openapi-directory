import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGroupsDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}


export class GetGroupsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetGroupsDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class GetGroupsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGroupsQueryParams;
}


export class GetGroupsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
