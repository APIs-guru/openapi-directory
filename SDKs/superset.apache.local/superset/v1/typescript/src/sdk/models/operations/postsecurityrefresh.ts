import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostSecurityRefreshSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwtRefresh: shared.SchemeJwtRefresh;
}


export class PostSecurityRefresh200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken?: string;
}


export class PostSecurityRefresh401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostSecurityRefresh500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostSecurityRefreshRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: PostSecurityRefreshSecurity;
}


export class PostSecurityRefreshResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postSecurityRefresh200ApplicationJsonObject?: PostSecurityRefresh200ApplicationJson;

  @SpeakeasyMetadata()
  postSecurityRefresh401ApplicationJsonObject?: PostSecurityRefresh401ApplicationJson;

  @SpeakeasyMetadata()
  postSecurityRefresh500ApplicationJsonObject?: PostSecurityRefresh500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
