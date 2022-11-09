import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiStatusAppVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=latest_app_version" })
  latestAppVersion: number;

  @Metadata({ data: "json, name=min_app_version" })
  minAppVersion: number;
}
