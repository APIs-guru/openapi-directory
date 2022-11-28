import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiStatusAppVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=latest_app_version" })
  latestAppVersion: number;

  @SpeakeasyMetadata({ data: "json, name=min_app_version" })
  minAppVersion: number;
}
