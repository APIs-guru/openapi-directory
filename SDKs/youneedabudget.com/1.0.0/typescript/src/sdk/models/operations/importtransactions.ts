import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ImportTransactionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=budget_id" })
  budgetId: string;
}


export class ImportTransactionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ImportTransactionsPathParams;
}


export class ImportTransactionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  transactionsImportResponse?: shared.TransactionsImportResponse;
}
