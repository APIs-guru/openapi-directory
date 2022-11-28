import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CveCheckPackages
/** 
 * Packages affected by this CVE
**/
export class CveCheckPackages extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}


export class CveCheck extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cveId" })
  cveId?: string;

  @SpeakeasyMetadata({ data: "json, name=nodes" })
  nodes?: string[];

  @SpeakeasyMetadata({ data: "json, name=packages", elemType: CveCheckPackages })
  packages?: CveCheckPackages[];
}
