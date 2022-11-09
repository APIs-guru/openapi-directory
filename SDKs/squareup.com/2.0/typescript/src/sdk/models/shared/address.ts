import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Address
/** 
 * Represents a postal address in a country. The address format is based 
 * on an [open-source library from Google](https://github.com/google/libaddressinput). For more information, 
 * see [AddressValidationMetadata](https://github.com/google/libaddressinput/wiki/AddressValidationMetadata). 
 * This format has dedicated fields for four address components: postal code, 
 * locality (city), administrative district (state, prefecture, or province), and 
 * sublocality (town or village). These components have dedicated fields in the 
 * `Address` object because software sometimes behaves differently based on them. 
 * For example, sales tax software may charge different amounts of sales tax 
 * based on the postal code, and some software is only available in 
 * certain states due to compliance reasons.
 * 
 * For the remaining address components, the `Address` type provides the 
 * `address_line_1` and `address_line_2` fields for free-form data entry. 
 * These fields are free-form because the remaining address components have 
 * too many variations around the world and typical software does not parse 
 * these components. These fields enable users to enter anything they want. 
 * 
 * Note that, in the current implementation, all other `Address` type fields are blank. 
 * These include `address_line_3`, `sublocality_2`, `sublocality_3`, 
 * `administrative_district_level_2`, `administrative_district_level_3`, 
 * `first_name`, `last_name`, and `organization`. 
 * 
 * When it comes to localization, the seller's language preferences 
 * (see [Language preferences](https://developer.squareup.com/docs/locations-api#location-specific-and-seller-level-language-preferences)) 
 * are ignored for addresses. Even though Square products (such as Square Point of Sale 
 * and the Seller Dashboard) mostly use a seller's language preference in 
 * communication, when it comes to addresses, they will use English for a US address, 
 * Japanese for an address in Japan, and so on.
**/
export class Address extends SpeakeasyBase {
  @Metadata({ data: "json, name=address_line_1" })
  addressLine1?: string;

  @Metadata({ data: "json, name=address_line_2" })
  addressLine2?: string;

  @Metadata({ data: "json, name=address_line_3" })
  addressLine3?: string;

  @Metadata({ data: "json, name=administrative_district_level_1" })
  administrativeDistrictLevel1?: string;

  @Metadata({ data: "json, name=administrative_district_level_2" })
  administrativeDistrictLevel2?: string;

  @Metadata({ data: "json, name=administrative_district_level_3" })
  administrativeDistrictLevel3?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=first_name" })
  firstName?: string;

  @Metadata({ data: "json, name=last_name" })
  lastName?: string;

  @Metadata({ data: "json, name=locality" })
  locality?: string;

  @Metadata({ data: "json, name=organization" })
  organization?: string;

  @Metadata({ data: "json, name=postal_code" })
  postalCode?: string;

  @Metadata({ data: "json, name=sublocality" })
  sublocality?: string;

  @Metadata({ data: "json, name=sublocality_2" })
  sublocality2?: string;

  @Metadata({ data: "json, name=sublocality_3" })
  sublocality3?: string;
}
