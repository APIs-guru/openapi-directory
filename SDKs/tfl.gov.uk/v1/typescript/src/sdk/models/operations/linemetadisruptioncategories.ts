import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LineMetaDisruptionCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  lineMetaDisruptionCategories200ApplicationJsonStrings?: string[];

  @SpeakeasyMetadata()
  lineMetaDisruptionCategories200TextJsonStrings?: string[];

  @SpeakeasyMetadata()
  statusCode: number;
}
