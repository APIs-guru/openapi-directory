import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PageForResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=numberOfElements" })
  numberOfElements?: number;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=totalElements" })
  totalElements?: number;

  @SpeakeasyMetadata({ data: "json, name=totalPages" })
  totalPages?: number;
}
