import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Pagination extends SpeakeasyBase {
  @Metadata({ data: "json, name=current_page" })
  currentPage: number;

  @Metadata({ data: "json, name=per_page" })
  perPage: number;

  @Metadata({ data: "json, name=total_entries" })
  totalEntries: number;

  @Metadata({ data: "json, name=total_pages" })
  totalPages: number;
}
