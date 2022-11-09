import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CallLogsEmbeddedObject } from "./calllogsembeddedobject";
import { Links } from "./links";


export class CallLogsHalResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=_embedded" })
  embedded?: CallLogsEmbeddedObject;

  @Metadata({ data: "json, name=_links" })
  links?: Links;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=page_size" })
  pageSize?: number;

  @Metadata({ data: "json, name=total_items" })
  totalItems?: number;

  @Metadata({ data: "json, name=total_page" })
  totalPage?: number;
}
