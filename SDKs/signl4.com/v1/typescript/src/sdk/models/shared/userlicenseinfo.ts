import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserLicenseInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currentUsers" })
  currentUsers?: number;

  @SpeakeasyMetadata({ data: "json, name=isFree" })
  isFree?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isTrial" })
  isTrial?: boolean;

  @SpeakeasyMetadata({ data: "json, name=licensedUsers" })
  licensedUsers?: number;

  @SpeakeasyMetadata({ data: "json, name=planCode" })
  planCode?: string;
}
