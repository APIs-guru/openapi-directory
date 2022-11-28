import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Pagination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currentPage" })
  currentPage?: number;

  @SpeakeasyMetadata({ data: "json, name=pageCount" })
  pageCount?: number;

  @SpeakeasyMetadata({ data: "json, name=perPage" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "json, name=totalCount" })
  totalCount?: number;
}
