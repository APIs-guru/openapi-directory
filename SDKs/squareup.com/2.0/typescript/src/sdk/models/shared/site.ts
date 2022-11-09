import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Site
/** 
 * Represents a Square Online site, which is an online store for a Square seller.
**/
export class Site extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=domain" })
  domain?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=is_published" })
  isPublished?: boolean;

  @Metadata({ data: "json, name=site_title" })
  siteTitle?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}
