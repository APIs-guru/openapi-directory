import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CallLogsEmbeddedObject } from "./calllogsembeddedobject";
import { Links } from "./links";



export class CallLogsHalResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_embedded" })
  embedded?: CallLogsEmbeddedObject;

  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: Links;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=total_items" })
  totalItems?: number;

  @SpeakeasyMetadata({ data: "json, name=total_page" })
  totalPage?: number;
}
