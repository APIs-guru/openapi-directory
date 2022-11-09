import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ControllersFilterData } from "./controllersfilterdata";


export class ControllersListMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=filter", elemType: shared.ControllersFilterData })
  filter?: Map<string, ControllersFilterData>;

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=offset" })
  offset?: number;

  @Metadata({ data: "json, name=search" })
  search?: string;

  @Metadata({ data: "json, name=sort" })
  sort?: string[];

  @Metadata({ data: "json, name=subtotals" })
  subtotals?: Map<string, number>;

  @Metadata({ data: "json, name=total_items" })
  totalItems?: number;
}
