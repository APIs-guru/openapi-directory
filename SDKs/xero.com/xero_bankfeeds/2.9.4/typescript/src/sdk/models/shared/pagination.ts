import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Pagination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=itemCount" })
  itemCount?: number;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=pageCount" })
  pageCount?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;
}
