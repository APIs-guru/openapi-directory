import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDocumentationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDocumentation200ApplicationJsonObject?: Map<string, any>;
}
