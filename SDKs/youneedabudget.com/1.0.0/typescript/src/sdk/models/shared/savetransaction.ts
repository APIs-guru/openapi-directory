import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SaveSubTransaction } from "./savesubtransaction";

export enum SaveTransactionClearedEnum {
    Cleared = "cleared"
,    Uncleared = "uncleared"
,    Reconciled = "reconciled"
}

export enum SaveTransactionFlagColorEnum {
    Red = "red"
,    Orange = "orange"
,    Yellow = "yellow"
,    Green = "green"
,    Blue = "blue"
,    Purple = "purple"
}


export class SaveTransaction extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_id" })
  accountId: string;

  @Metadata({ data: "json, name=amount" })
  amount: number;

  @Metadata({ data: "json, name=approved" })
  approved?: boolean;

  @Metadata({ data: "json, name=category_id" })
  categoryId?: string;

  @Metadata({ data: "json, name=cleared" })
  cleared?: SaveTransactionClearedEnum;

  @Metadata({ data: "json, name=date" })
  date: Date;

  @Metadata({ data: "json, name=flag_color" })
  flagColor?: SaveTransactionFlagColorEnum;

  @Metadata({ data: "json, name=import_id" })
  importId?: string;

  @Metadata({ data: "json, name=memo" })
  memo?: string;

  @Metadata({ data: "json, name=payee_id" })
  payeeId?: string;

  @Metadata({ data: "json, name=payee_name" })
  payeeName?: string;

  @Metadata({ data: "json, name=subtransactions", elemType: shared.SaveSubTransaction })
  subtransactions?: SaveSubTransaction[];
}
