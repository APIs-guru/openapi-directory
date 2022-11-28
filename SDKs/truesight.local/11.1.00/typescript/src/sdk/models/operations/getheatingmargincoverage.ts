import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetHeatingMarginCoverageDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}


export class GetHeatingMarginCoverageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=applicationId" })
  applicationId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=covered" })
  covered?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetHeatingMarginCoverageDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupId" })
  groupId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serviceId" })
  serviceId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class GetHeatingMarginCoverageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetHeatingMarginCoverageQueryParams;
}


export class GetHeatingMarginCoverageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
