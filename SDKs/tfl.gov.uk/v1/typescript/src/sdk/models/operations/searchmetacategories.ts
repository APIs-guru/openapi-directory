import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchMetaCategoriesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  searchMetaCategories200ApplicationJsonStrings?: string[];

  @Metadata()
  searchMetaCategories200TextJsonStrings?: string[];

  @Metadata()
  statusCode: number;
}
