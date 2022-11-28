import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostDashboardSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PostDashboard201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: shared.DashboardRestApiPost;
}


export class PostDashboard400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostDashboard401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostDashboard404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostDashboard500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostDashboardRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DashboardRestApiPost;

  @SpeakeasyMetadata()
  security: PostDashboardSecurity;
}


export class PostDashboardResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postDashboard201ApplicationJsonObject?: PostDashboard201ApplicationJson;

  @SpeakeasyMetadata()
  postDashboard400ApplicationJsonObject?: PostDashboard400ApplicationJson;

  @SpeakeasyMetadata()
  postDashboard401ApplicationJsonObject?: PostDashboard401ApplicationJson;

  @SpeakeasyMetadata()
  postDashboard404ApplicationJsonObject?: PostDashboard404ApplicationJson;

  @SpeakeasyMetadata()
  postDashboard500ApplicationJsonObject?: PostDashboard500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
