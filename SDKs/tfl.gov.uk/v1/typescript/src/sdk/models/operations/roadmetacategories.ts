import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RoadMetaCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  roadMetaCategories200ApplicationJsonStrings?: string[];

  @SpeakeasyMetadata()
  roadMetaCategories200TextJsonStrings?: string[];

  @SpeakeasyMetadata()
  statusCode: number;
}
