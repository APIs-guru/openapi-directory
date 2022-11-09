import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPrepaidTransactionsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata({ elemType: shared.PrepaidTransactionInfo })
  prepaidTransactionInfos?: shared.PrepaidTransactionInfo[];

  @Metadata()
  statusCode: number;
}
