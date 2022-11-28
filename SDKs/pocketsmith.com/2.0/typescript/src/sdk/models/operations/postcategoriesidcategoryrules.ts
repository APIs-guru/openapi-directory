import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostCategoriesIdCategoryRulesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostCategoriesIdCategoryRulesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apply_to_all" })
  applyToAll?: boolean;

  @SpeakeasyMetadata({ data: "json, name=apply_to_uncategorised" })
  applyToUncategorised?: boolean;

  @SpeakeasyMetadata({ data: "json, name=payee_matches" })
  payeeMatches: string;
}


export class PostCategoriesIdCategoryRulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostCategoriesIdCategoryRulesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostCategoriesIdCategoryRulesRequestBody;
}


export class PostCategoriesIdCategoryRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  categoryRule?: shared.CategoryRule;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
