import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCategoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=category" })
  category: string;
}


export class GetCategoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCategoryPathParams;
}


export class GetCategoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  category?: shared.Category;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;
}
