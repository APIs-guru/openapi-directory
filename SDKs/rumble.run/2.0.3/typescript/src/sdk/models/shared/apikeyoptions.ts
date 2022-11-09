import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiKeyOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=comment" })
  comment?: string;

  @Metadata({ data: "json, name=organization_id" })
  organizationId?: string;
}
