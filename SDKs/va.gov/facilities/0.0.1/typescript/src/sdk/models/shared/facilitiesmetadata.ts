import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Distance } from "./distance";
import { Pagination } from "./pagination";


export class FacilitiesMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=distances", elemType: shared.Distance })
  distances: Distance[];

  @Metadata({ data: "json, name=pagination" })
  pagination: Pagination;
}
