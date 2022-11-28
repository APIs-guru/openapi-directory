import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TenantInfoResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
