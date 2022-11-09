import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Availability } from "./availability";
import { Error } from "./error";


export class SearchAvailabilityResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=availabilities", elemType: shared.Availability })
  availabilities?: Availability[];

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];
}
