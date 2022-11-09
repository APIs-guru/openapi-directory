import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RoadMetaCategoriesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  roadMetaCategories200ApplicationJsonStrings?: string[];

  @Metadata()
  roadMetaCategories200TextJsonStrings?: string[];

  @Metadata()
  statusCode: number;
}
