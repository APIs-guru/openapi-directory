import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGroupsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}


export class GetGroupsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetGroupsDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class GetGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGroupsQueryParams;
}


export class GetGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
