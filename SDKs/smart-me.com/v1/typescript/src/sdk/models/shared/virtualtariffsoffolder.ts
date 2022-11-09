import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VirtualTariff } from "./virtualtariff";


// VirtualTariffsOfFolder
/** 
 * Container class for a Virtual Tariff
**/
export class VirtualTariffsOfFolder extends SpeakeasyBase {
  @Metadata({ data: "json, name=Date" })
  date?: Date;

  @Metadata({ data: "json, name=FolderId" })
  folderId?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=VirtualTariffs", elemType: shared.VirtualTariff })
  virtualTariffs?: VirtualTariff[];
}
