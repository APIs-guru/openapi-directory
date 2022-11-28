import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCompanyTimeOffTypesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetCompanyTimeOffTypes200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.TimeOffTypeResource })
  data?: shared.TimeOffTypeResource[];

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}


export class GetCompanyTimeOffTypesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCompanyTimeOffTypesQueryParams;
}


export class GetCompanyTimeOffTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getCompanyTimeOffTypes200ApplicationJsonObject?: GetCompanyTimeOffTypes200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
