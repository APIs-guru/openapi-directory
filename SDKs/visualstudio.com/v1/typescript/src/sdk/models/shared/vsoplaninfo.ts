import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VsoPlanInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=location" })
  location?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=providerNamespace" })
  providerNamespace?: string;

  @Metadata({ data: "json, name=resourceGroup" })
  resourceGroup?: string;

  @Metadata({ data: "json, name=resourceId" })
  resourceId?: string;

  @Metadata({ data: "json, name=subscription" })
  subscription?: string;
}
