import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndUserRouteEmbeddedObject } from "./enduserrouteembeddedobject";
import { Links } from "./links";



export class EndUserRouteHalResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_embedded" })
  embedded?: EndUserRouteEmbeddedObject;

  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: Links;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=total_items" })
  totalItems?: number;

  @SpeakeasyMetadata({ data: "json, name=total_pages" })
  totalPages?: number;
}
