import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EndUserRouteEmbeddedObject } from "./enduserrouteembeddedobject";
import { Links } from "./links";


export class EndUserRouteHalResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=_embedded" })
  embedded?: EndUserRouteEmbeddedObject;

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
