import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualTariff } from "./virtualtariff";



// VirtualTariffsOfFolder
/** 
 * Container class for a Virtual Tariff
**/
export class VirtualTariffsOfFolder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=FolderId" })
  folderId?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=VirtualTariffs", elemType: VirtualTariff })
  virtualTariffs?: VirtualTariff[];
}
