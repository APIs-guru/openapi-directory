import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEnvironmentRoutePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environmentId" })
  environmentId: string;
}


export class GetEnvironmentRouteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=connect" })
  connect?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pfConnect" })
  pfConnect?: boolean;
}


export class GetEnvironmentRouteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEnvironmentRoutePathParams;

  @SpeakeasyMetadata()
  queryParams: GetEnvironmentRouteQueryParams;
}


export class GetEnvironmentRouteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  cloudEnvironmentResult?: shared.CloudEnvironmentResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
