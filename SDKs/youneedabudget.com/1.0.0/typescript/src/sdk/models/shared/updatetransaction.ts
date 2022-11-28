import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SaveSubTransaction } from "./savesubtransaction";


export enum UpdateTransactionClearedEnum {
    Cleared = "cleared",
    Uncleared = "uncleared",
    Reconciled = "reconciled"
}

export enum UpdateTransactionFlagColorEnum {
    Red = "red",
    Orange = "orange",
    Yellow = "yellow",
    Green = "green",
    Blue = "blue",
    Purple = "purple"
}


export class UpdateTransaction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=approved" })
  approved?: boolean;

  @SpeakeasyMetadata({ data: "json, name=category_id" })
  categoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=cleared" })
  cleared?: UpdateTransactionClearedEnum;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date: Date;

  @SpeakeasyMetadata({ data: "json, name=flag_color" })
  flagColor?: UpdateTransactionFlagColorEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=import_id" })
  importId?: string;

  @SpeakeasyMetadata({ data: "json, name=memo" })
  memo?: string;

  @SpeakeasyMetadata({ data: "json, name=payee_id" })
  payeeId?: string;

  @SpeakeasyMetadata({ data: "json, name=payee_name" })
  payeeName?: string;

  @SpeakeasyMetadata({ data: "json, name=subtransactions", elemType: SaveSubTransaction })
  subtransactions?: SaveSubTransaction[];
}
