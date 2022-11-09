import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostDashboardSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PostDashboardRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DashboardRestApiPost;

  @Metadata()
  security: PostDashboardSecurity;
}


export class PostDashboard201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=result" })
  result?: shared.DashboardRestApiPost;
}


export class PostDashboard400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostDashboard401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostDashboard404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostDashboard500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostDashboardResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postDashboard201ApplicationJsonObject?: PostDashboard201ApplicationJson;

  @Metadata()
  postDashboard400ApplicationJsonObject?: PostDashboard400ApplicationJson;

  @Metadata()
  postDashboard401ApplicationJsonObject?: PostDashboard401ApplicationJson;

  @Metadata()
  postDashboard404ApplicationJsonObject?: PostDashboard404ApplicationJson;

  @Metadata()
  postDashboard500ApplicationJsonObject?: PostDashboard500ApplicationJson;

  @Metadata()
  statusCode: number;
}
