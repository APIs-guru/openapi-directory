import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PageForResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=numberOfElements" })
  numberOfElements?: number;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=totalElements" })
  totalElements?: number;

  @Metadata({ data: "json, name=totalPages" })
  totalPages?: number;
}
