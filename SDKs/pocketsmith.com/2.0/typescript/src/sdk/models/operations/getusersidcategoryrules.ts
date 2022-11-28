import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUsersIdCategoryRulesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetUsersIdCategoryRulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUsersIdCategoryRulesPathParams;
}


export class GetUsersIdCategoryRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.CategoryRule })
  categoryRules?: shared.CategoryRule[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
