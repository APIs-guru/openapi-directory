import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Institution extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=currency_code" })
  currencyCode?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}
