import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LineMetaDisruptionCategoriesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  lineMetaDisruptionCategories200ApplicationJsonStrings?: string[];

  @Metadata()
  lineMetaDisruptionCategories200TextJsonStrings?: string[];

  @Metadata()
  statusCode: number;
}
