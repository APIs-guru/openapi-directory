import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVersionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionId" })
  versionId: string;
}


export class GetVersionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiKey: shared.SchemeApiKey;
}


export class GetVersionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVersionPathParams;

  @Metadata()
  security: GetVersionSecurity;
}


export class GetVersionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
