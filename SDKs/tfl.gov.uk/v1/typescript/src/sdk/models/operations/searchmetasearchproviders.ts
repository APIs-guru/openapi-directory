import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchMetaSearchProvidersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  searchMetaSearchProviders200ApplicationJsonStrings?: string[];

  @SpeakeasyMetadata()
  searchMetaSearchProviders200TextJsonStrings?: string[];

  @SpeakeasyMetadata()
  statusCode: number;
}
