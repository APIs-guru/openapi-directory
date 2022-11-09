import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RefreshProfileTelemetryPropertiesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=partner" })
  partner?: string;

  @Metadata({ data: "json, name=tenantId" })
  tenantId?: string;

  @Metadata({ data: "json, name=userIds" })
  userIds?: string;
}
