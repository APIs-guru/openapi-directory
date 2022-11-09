import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteChangelogPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class DeleteChangelogSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiKey: shared.SchemeApiKey;
}


export class DeleteChangelogRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteChangelogPathParams;

  @Metadata()
  security: DeleteChangelogSecurity;
}


export class DeleteChangelogResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
