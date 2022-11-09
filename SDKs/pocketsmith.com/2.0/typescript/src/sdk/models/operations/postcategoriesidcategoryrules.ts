import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostCategoriesIdCategoryRulesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostCategoriesIdCategoryRulesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=apply_to_all" })
  applyToAll?: boolean;

  @Metadata({ data: "json, name=apply_to_uncategorised" })
  applyToUncategorised?: boolean;

  @Metadata({ data: "json, name=payee_matches" })
  payeeMatches: string;
}


export class PostCategoriesIdCategoryRulesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostCategoriesIdCategoryRulesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostCategoriesIdCategoryRulesRequestBody;
}


export class PostCategoriesIdCategoryRulesResponse extends SpeakeasyBase {
  @Metadata()
  categoryRule?: shared.CategoryRule;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
