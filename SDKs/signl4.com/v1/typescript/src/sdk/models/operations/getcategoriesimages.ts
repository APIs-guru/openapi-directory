import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCategoriesImagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  getCategoriesImages200ApplicationJsonStrings?: string[];

  @SpeakeasyMetadata()
  getCategoriesImages200TextJsonStrings?: string[];

  @SpeakeasyMetadata()
  statusCode: number;
}
