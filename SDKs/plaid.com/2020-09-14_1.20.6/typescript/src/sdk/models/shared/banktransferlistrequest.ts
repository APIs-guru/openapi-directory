import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BankTransferDirectionEnum } from "./banktransferdirectionenum";


// BankTransferListRequest
/** 
 * BankTransferListRequest defines the request schema for `/bank_transfer/list`
**/
export class BankTransferListRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=direction" })
  direction?: BankTransferDirectionEnum;

  @Metadata({ data: "json, name=end_date" })
  endDate?: Date;

  @Metadata({ data: "json, name=offset" })
  offset?: number;

  @Metadata({ data: "json, name=origination_account_id" })
  originationAccountId?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=start_date" })
  startDate?: Date;
}
