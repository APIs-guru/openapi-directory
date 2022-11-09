import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteVersionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionId" })
  versionId: string;
}


export class DeleteVersionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiKey: shared.SchemeApiKey;
}


export class DeleteVersionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteVersionPathParams;

  @Metadata()
  security: DeleteVersionSecurity;
}


export class DeleteVersionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
