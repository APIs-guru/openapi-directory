import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RefreshProfileTelemetryPropertiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=partner" })
  partner?: string;

  @SpeakeasyMetadata({ data: "json, name=tenantId" })
  tenantId?: string;

  @SpeakeasyMetadata({ data: "json, name=userIds" })
  userIds?: string;
}
