import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDocumentationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDocumentation200ApplicationJsonObject?: Map<string, any>;
}
