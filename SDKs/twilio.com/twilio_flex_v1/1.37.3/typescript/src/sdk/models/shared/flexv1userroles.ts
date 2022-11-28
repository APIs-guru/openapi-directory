import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FlexV1UserRoles extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=roles" })
  roles?: string[];

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
