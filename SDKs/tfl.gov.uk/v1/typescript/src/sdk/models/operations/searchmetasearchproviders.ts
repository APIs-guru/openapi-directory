import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchMetaSearchProvidersResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  searchMetaSearchProviders200ApplicationJsonStrings?: string[];

  @Metadata()
  searchMetaSearchProviders200TextJsonStrings?: string[];

  @Metadata()
  statusCode: number;
}
