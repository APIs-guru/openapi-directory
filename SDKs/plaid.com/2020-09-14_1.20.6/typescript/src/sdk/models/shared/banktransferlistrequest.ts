import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BankTransferDirectionEnum } from "./banktransferdirectionenum";



// BankTransferListRequest
/** 
 * BankTransferListRequest defines the request schema for `/bank_transfer/list`
**/
export class BankTransferListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction?: BankTransferDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=end_date" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=origination_account_id" })
  originationAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;

  @SpeakeasyMetadata({ data: "json, name=start_date" })
  startDate?: Date;
}
