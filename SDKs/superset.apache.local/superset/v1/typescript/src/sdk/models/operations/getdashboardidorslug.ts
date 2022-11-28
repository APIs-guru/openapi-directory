import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDashboardIdOrSlugPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id_or_slug" })
  idOrSlug: string;
}


export class GetDashboardIdOrSlugSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDashboardIdOrSlug200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: shared.DashboardGetResponseSchema;
}


export class GetDashboardIdOrSlug400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardIdOrSlug401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardIdOrSlug404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardIdOrSlugRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDashboardIdOrSlugPathParams;

  @SpeakeasyMetadata()
  security: GetDashboardIdOrSlugSecurity;
}


export class GetDashboardIdOrSlugResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getDashboardIdOrSlug200ApplicationJsonObject?: GetDashboardIdOrSlug200ApplicationJson;

  @SpeakeasyMetadata()
  getDashboardIdOrSlug400ApplicationJsonObject?: GetDashboardIdOrSlug400ApplicationJson;

  @SpeakeasyMetadata()
  getDashboardIdOrSlug401ApplicationJsonObject?: GetDashboardIdOrSlug401ApplicationJson;

  @SpeakeasyMetadata()
  getDashboardIdOrSlug404ApplicationJsonObject?: GetDashboardIdOrSlug404ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
