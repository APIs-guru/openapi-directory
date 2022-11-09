import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { CatalogInfoResponseLimits } from "./cataloginforesponselimits";
import { StandardUnitDescriptionGroup } from "./standardunitdescriptiongroup";


export class CatalogInfoResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=limits" })
  limits?: CatalogInfoResponseLimits;

  @Metadata({ data: "json, name=standard_unit_description_group" })
  standardUnitDescriptionGroup?: StandardUnitDescriptionGroup;
}
