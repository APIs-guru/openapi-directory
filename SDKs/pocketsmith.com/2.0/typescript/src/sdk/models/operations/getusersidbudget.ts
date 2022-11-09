import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUsersIdBudgetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetUsersIdBudgetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=roll_up" })
  rollUp?: boolean;
}


export class GetUsersIdBudgetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUsersIdBudgetPathParams;

  @Metadata()
  queryParams: GetUsersIdBudgetQueryParams;
}


export class GetUsersIdBudgetResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.BudgetAnalysisPackage })
  budgetAnalysisPackages?: shared.BudgetAnalysisPackage[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
