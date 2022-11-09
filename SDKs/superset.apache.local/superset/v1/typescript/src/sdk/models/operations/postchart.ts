import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostChartSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PostChartRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ChartRestApiPost;

  @Metadata()
  security: PostChartSecurity;
}


export class PostChart201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=result" })
  result?: shared.ChartRestApiPost;
}


export class PostChart400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostChart401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostChart422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostChart500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostChartResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postChart201ApplicationJsonObject?: PostChart201ApplicationJson;

  @Metadata()
  postChart400ApplicationJsonObject?: PostChart400ApplicationJson;

  @Metadata()
  postChart401ApplicationJsonObject?: PostChart401ApplicationJson;

  @Metadata()
  postChart422ApplicationJsonObject?: PostChart422ApplicationJson;

  @Metadata()
  postChart500ApplicationJsonObject?: PostChart500ApplicationJson;

  @Metadata()
  statusCode: number;
}
