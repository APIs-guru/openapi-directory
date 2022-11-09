import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SearchAvailabilityQuery } from "./searchavailabilityquery";


export class SearchAvailabilityRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=query" })
  query: SearchAvailabilityQuery;
}
