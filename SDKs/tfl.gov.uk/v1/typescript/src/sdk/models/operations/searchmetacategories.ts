import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchMetaCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  searchMetaCategories200ApplicationJsonStrings?: string[];

  @SpeakeasyMetadata()
  searchMetaCategories200TextJsonStrings?: string[];

  @SpeakeasyMetadata()
  statusCode: number;
}
