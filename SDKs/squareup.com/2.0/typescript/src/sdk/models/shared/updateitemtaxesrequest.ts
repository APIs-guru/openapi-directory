import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateItemTaxesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=item_ids" })
  itemIds: string[];

  @Metadata({ data: "json, name=taxes_to_disable" })
  taxesToDisable?: string[];

  @Metadata({ data: "json, name=taxes_to_enable" })
  taxesToEnable?: string[];
}
