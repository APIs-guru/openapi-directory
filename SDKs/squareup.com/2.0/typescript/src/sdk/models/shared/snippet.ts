import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Snippet
/** 
 * Represents the snippet that is added to a Square Online site. The snippet code is injected into the `head` element of all pages on the site, except for checkout pages.
**/
export class Snippet extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=site_id" })
  siteId?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}
