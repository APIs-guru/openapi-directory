import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCompanyTimeOffTypesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetCompanyTimeOffTypesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCompanyTimeOffTypesQueryParams;
}


export class GetCompanyTimeOffTypes200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.TimeOffTypeResource })
  data?: shared.TimeOffTypeResource[];

  @Metadata({ data: "json, name=success" })
  success?: boolean;
}


export class GetCompanyTimeOffTypesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getCompanyTimeOffTypes200ApplicationJsonObject?: GetCompanyTimeOffTypes200ApplicationJson;

  @Metadata()
  statusCode: number;
}
