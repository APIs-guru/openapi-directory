import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDashboardIdOrSlugPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id_or_slug" })
  idOrSlug: string;
}


export class GetDashboardIdOrSlugSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDashboardIdOrSlugRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDashboardIdOrSlugPathParams;

  @Metadata()
  security: GetDashboardIdOrSlugSecurity;
}


export class GetDashboardIdOrSlug200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=result" })
  result?: shared.DashboardGetResponseSchema;
}


export class GetDashboardIdOrSlug400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardIdOrSlug401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardIdOrSlug404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardIdOrSlugResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getDashboardIdOrSlug200ApplicationJsonObject?: GetDashboardIdOrSlug200ApplicationJson;

  @Metadata()
  getDashboardIdOrSlug400ApplicationJsonObject?: GetDashboardIdOrSlug400ApplicationJson;

  @Metadata()
  getDashboardIdOrSlug401ApplicationJsonObject?: GetDashboardIdOrSlug401ApplicationJson;

  @Metadata()
  getDashboardIdOrSlug404ApplicationJsonObject?: GetDashboardIdOrSlug404ApplicationJson;

  @Metadata()
  statusCode: number;
}
