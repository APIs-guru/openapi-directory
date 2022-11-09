import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Merchant
/** 
 * Represents a Square seller.
**/
export class Merchant extends SpeakeasyBase {
  @Metadata({ data: "json, name=business_name" })
  businessName?: string;

  @Metadata({ data: "json, name=country" })
  country: string;

  @Metadata({ data: "json, name=currency" })
  currency?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=language_code" })
  languageCode?: string;

  @Metadata({ data: "json, name=main_location_id" })
  mainLocationId?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
