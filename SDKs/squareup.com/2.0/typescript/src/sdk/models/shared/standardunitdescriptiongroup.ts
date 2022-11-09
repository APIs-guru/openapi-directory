import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StandardUnitDescription } from "./standardunitdescription";


// StandardUnitDescriptionGroup
/** 
 * Group of standard measurement units.
**/
export class StandardUnitDescriptionGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=language_code" })
  languageCode?: string;

  @Metadata({ data: "json, name=standard_unit_descriptions", elemType: shared.StandardUnitDescription })
  standardUnitDescriptions?: StandardUnitDescription[];
}
