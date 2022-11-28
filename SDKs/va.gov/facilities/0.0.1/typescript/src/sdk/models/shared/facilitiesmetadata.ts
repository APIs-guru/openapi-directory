import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Distance } from "./distance";
import { Pagination } from "./pagination";



export class FacilitiesMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=distances", elemType: Distance })
  distances: Distance[];

  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination: Pagination;
}
