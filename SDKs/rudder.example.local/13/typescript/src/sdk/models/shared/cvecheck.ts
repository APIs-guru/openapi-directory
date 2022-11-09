import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


// CveCheckPackages
/** 
 * Packages affected by this CVE
**/
export class CveCheckPackages extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}


export class CveCheck extends SpeakeasyBase {
  @Metadata({ data: "json, name=cveId" })
  cveId?: string;

  @Metadata({ data: "json, name=nodes" })
  nodes?: string[];

  @Metadata({ data: "json, name=packages", elemType: shared.CveCheckPackages })
  packages?: CveCheckPackages[];
}
