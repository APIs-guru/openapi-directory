import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccountEmbeddedObject } from "./accountembeddedobject";
import { Links } from "./links";


export class AccountHalResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=_embedded" })
  embedded?: AccountEmbeddedObject;

  @Metadata({ data: "json, name=_links" })
  links?: Links;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=page_size" })
  pageSize?: number;

  @Metadata({ data: "json, name=total_items" })
  totalItems?: number;

  @Metadata({ data: "json, name=total_pages" })
  totalPages?: number;
}
