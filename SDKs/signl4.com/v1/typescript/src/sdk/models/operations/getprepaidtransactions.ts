import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPrepaidTransactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata({ elemType: shared.PrepaidTransactionInfo })
  prepaidTransactionInfos?: shared.PrepaidTransactionInfo[];

  @SpeakeasyMetadata()
  statusCode: number;
}
