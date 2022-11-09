import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Pagination extends SpeakeasyBase {
  @Metadata({ data: "json, name=currentPage" })
  currentPage?: number;

  @Metadata({ data: "json, name=pageCount" })
  pageCount?: number;

  @Metadata({ data: "json, name=perPage" })
  perPage?: number;

  @Metadata({ data: "json, name=totalCount" })
  totalCount?: number;
}
