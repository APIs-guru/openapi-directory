import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Presale
/** 
 * Event's Presale Info
**/
export class Presale extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=descriptions" })
  descriptions?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=endDateTime" })
  endDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=names" })
  names?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=startDateTime" })
  startDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
