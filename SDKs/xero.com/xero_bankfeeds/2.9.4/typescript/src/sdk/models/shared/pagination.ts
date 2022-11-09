import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Pagination extends SpeakeasyBase {
  @Metadata({ data: "json, name=itemCount" })
  itemCount?: number;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pageCount" })
  pageCount?: number;

  @Metadata({ data: "json, name=pageSize" })
  pageSize?: number;
}
