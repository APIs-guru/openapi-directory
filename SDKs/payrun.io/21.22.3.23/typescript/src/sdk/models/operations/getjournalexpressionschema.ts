import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetJournalExpressionSchemaHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetJournalExpressionSchemaRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetJournalExpressionSchemaHeaders;
}


export class GetJournalExpressionSchemaResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  journalExpressionDataTable?: any;

  @Metadata()
  statusCode: number;
}
