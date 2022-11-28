import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiKeyOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=organization_id" })
  organizationId?: string;
}
