import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ControllersFilterData } from "./controllersfilterdata";



export class ControllersListMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filter", elemType: ControllersFilterData })
  filter?: Map<string, ControllersFilterData>;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=search" })
  search?: string;

  @SpeakeasyMetadata({ data: "json, name=sort" })
  sort?: string[];

  @SpeakeasyMetadata({ data: "json, name=subtotals" })
  subtotals?: Map<string, number>;

  @SpeakeasyMetadata({ data: "json, name=total_items" })
  totalItems?: number;
}
