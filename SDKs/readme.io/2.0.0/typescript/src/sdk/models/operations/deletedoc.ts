import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteDocPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class DeleteDocHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-readme-version" })
  xReadmeVersion: string;
}


export class DeleteDocSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiKey: shared.SchemeApiKey;
}


export class DeleteDocRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteDocPathParams;

  @Metadata()
  headers: DeleteDocHeaders;

  @Metadata()
  security: DeleteDocSecurity;
}


export class DeleteDocResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
