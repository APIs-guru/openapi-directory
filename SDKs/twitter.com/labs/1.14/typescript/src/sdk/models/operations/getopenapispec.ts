import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOpenApiSpecResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getOpenApiSpec200ApplicationJsonString?: string;
}
