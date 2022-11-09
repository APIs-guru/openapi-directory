import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEnvironmentRoutePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;
}


export class GetEnvironmentRouteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=connect" })
  connect?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pfConnect" })
  pfConnect?: boolean;
}


export class GetEnvironmentRouteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEnvironmentRoutePathParams;

  @Metadata()
  queryParams: GetEnvironmentRouteQueryParams;
}


export class GetEnvironmentRouteResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  cloudEnvironmentResult?: shared.CloudEnvironmentResult;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
