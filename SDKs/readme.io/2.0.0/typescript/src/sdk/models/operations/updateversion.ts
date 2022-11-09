import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateVersionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionId" })
  versionId: string;
}


export class UpdateVersionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiKey: shared.SchemeApiKey;
}


export class UpdateVersionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateVersionPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Version;

  @Metadata()
  security: UpdateVersionSecurity;
}


export class UpdateVersionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
