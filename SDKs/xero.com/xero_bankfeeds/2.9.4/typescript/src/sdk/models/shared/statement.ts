import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EndBalance } from "./endbalance";
import { Error } from "./error";
import { StartBalance } from "./startbalance";
import { StatementLine } from "./statementline";


export class Statement extends SpeakeasyBase {
  @Metadata({ data: "json, name=endBalance" })
  endBalance?: EndBalance;

  @Metadata({ data: "json, name=endDate" })
  endDate?: Date;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=feedConnectionId" })
  feedConnectionId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=startBalance" })
  startBalance?: StartBalance;

  @Metadata({ data: "json, name=startDate" })
  startDate?: Date;

  @Metadata({ data: "json, name=statementLineCount" })
  statementLineCount?: number;

  @Metadata({ data: "json, name=statementLines", elemType: shared.StatementLine })
  statementLines?: StatementLine[];

  @Metadata({ data: "json, name=status" })
  status?: any;
}
