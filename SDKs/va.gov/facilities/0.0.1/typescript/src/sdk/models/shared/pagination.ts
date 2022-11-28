import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Pagination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current_page" })
  currentPage: number;

  @SpeakeasyMetadata({ data: "json, name=per_page" })
  perPage: number;

  @SpeakeasyMetadata({ data: "json, name=total_entries" })
  totalEntries: number;

  @SpeakeasyMetadata({ data: "json, name=total_pages" })
  totalPages: number;
}
