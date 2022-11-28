import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetJournalExpressionSchemaHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetJournalExpressionSchemaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetJournalExpressionSchemaHeaders;
}


export class GetJournalExpressionSchemaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  journalExpressionDataTable?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
