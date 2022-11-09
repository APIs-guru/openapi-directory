import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TimeRange } from "./timerange";
import { CustomerCreationSourceFilter } from "./customercreationsourcefilter";
import { CustomerTextFilter } from "./customertextfilter";
import { FilterValue } from "./filtervalue";
import { CustomerTextFilter } from "./customertextfilter";
import { CustomerTextFilter } from "./customertextfilter";
import { TimeRange } from "./timerange";


// CustomerFilter
/** 
 * Represents a set of `CustomerQuery` filters used to limit the set of
 * customers returned by the [SearchCustomers](https://developer.squareup.com/reference/square_2021-08-18/customers-api/search-customers) endpoint.
**/
export class CustomerFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: TimeRange;

  @Metadata({ data: "json, name=creation_source" })
  creationSource?: CustomerCreationSourceFilter;

  @Metadata({ data: "json, name=email_address" })
  emailAddress?: CustomerTextFilter;

  @Metadata({ data: "json, name=group_ids" })
  groupIds?: FilterValue;

  @Metadata({ data: "json, name=phone_number" })
  phoneNumber?: CustomerTextFilter;

  @Metadata({ data: "json, name=reference_id" })
  referenceId?: CustomerTextFilter;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: TimeRange;
}
