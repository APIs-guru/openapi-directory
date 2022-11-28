import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUsersIdBudgetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetUsersIdBudgetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=roll_up" })
  rollUp?: boolean;
}


export class GetUsersIdBudgetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUsersIdBudgetPathParams;

  @SpeakeasyMetadata()
  queryParams: GetUsersIdBudgetQueryParams;
}


export class GetUsersIdBudgetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.BudgetAnalysisPackage })
  budgetAnalysisPackages?: shared.BudgetAnalysisPackage[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
