import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetHeatingMarginCoverageDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}


export class GetHeatingMarginCoverageQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=applicationId" })
  applicationId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=covered" })
  covered?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetHeatingMarginCoverageDirectionEnum;

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


export class GetHeatingMarginCoverageRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetHeatingMarginCoverageQueryParams;
}


export class GetHeatingMarginCoverageResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
