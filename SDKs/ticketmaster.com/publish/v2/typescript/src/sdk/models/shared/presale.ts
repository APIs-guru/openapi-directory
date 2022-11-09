import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Presale
/** 
 * Event's Presale Info
**/
export class Presale extends SpeakeasyBase {
  @Metadata({ data: "json, name=descriptions" })
  descriptions?: Map<string, string>;

  @Metadata({ data: "json, name=endDateTime" })
  endDateTime?: Date;

  @Metadata({ data: "json, name=names" })
  names?: Map<string, string>;

  @Metadata({ data: "json, name=startDateTime" })
  startDateTime?: Date;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
