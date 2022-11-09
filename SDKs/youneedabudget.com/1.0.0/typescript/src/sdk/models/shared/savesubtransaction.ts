import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SaveSubTransaction extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount: number;

  @Metadata({ data: "json, name=category_id" })
  categoryId?: string;

  @Metadata({ data: "json, name=memo" })
  memo?: string;

  @Metadata({ data: "json, name=payee_id" })
  payeeId?: string;

  @Metadata({ data: "json, name=payee_name" })
  payeeName?: string;
}
