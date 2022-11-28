import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostChartSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PostChart201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: shared.ChartRestApiPost;
}


export class PostChart400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostChart401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostChart422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostChart500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostChartRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ChartRestApiPost;

  @SpeakeasyMetadata()
  security: PostChartSecurity;
}


export class PostChartResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postChart201ApplicationJsonObject?: PostChart201ApplicationJson;

  @SpeakeasyMetadata()
  postChart400ApplicationJsonObject?: PostChart400ApplicationJson;

  @SpeakeasyMetadata()
  postChart401ApplicationJsonObject?: PostChart401ApplicationJson;

  @SpeakeasyMetadata()
  postChart422ApplicationJsonObject?: PostChart422ApplicationJson;

  @SpeakeasyMetadata()
  postChart500ApplicationJsonObject?: PostChart500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
