import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUsersIdCategoryRulesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetUsersIdCategoryRulesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUsersIdCategoryRulesPathParams;
}


export class GetUsersIdCategoryRulesResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.CategoryRule })
  categoryRules?: shared.CategoryRule[];

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
