import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCategoriesImagesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  getCategoriesImages200ApplicationJsonStrings?: string[];

  @Metadata()
  getCategoriesImages200TextJsonStrings?: string[];

  @Metadata()
  statusCode: number;
}
