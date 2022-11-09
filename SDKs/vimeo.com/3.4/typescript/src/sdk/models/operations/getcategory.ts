import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCategoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=category" })
  category: string;
}


export class GetCategoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCategoryPathParams;
}


export class GetCategoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  category?: shared.Category;

  @Metadata()
  legacyError?: shared.LegacyError;
}
