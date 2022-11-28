import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndBalance } from "./endbalance";
import { Error } from "./error";
import { StartBalance } from "./startbalance";
import { StatementLine } from "./statementline";



export class Statement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endBalance" })
  endBalance?: EndBalance;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: Error })
  errors?: Error[];

  @SpeakeasyMetadata({ data: "json, name=feedConnectionId" })
  feedConnectionId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=startBalance" })
  startBalance?: StartBalance;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=statementLineCount" })
  statementLineCount?: number;

  @SpeakeasyMetadata({ data: "json, name=statementLines", elemType: StatementLine })
  statementLines?: StatementLine[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: any;
}
