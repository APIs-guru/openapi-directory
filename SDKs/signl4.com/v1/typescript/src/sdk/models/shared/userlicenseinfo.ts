import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UserLicenseInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=currentUsers" })
  currentUsers?: number;

  @Metadata({ data: "json, name=isFree" })
  isFree?: boolean;

  @Metadata({ data: "json, name=isTrial" })
  isTrial?: boolean;

  @Metadata({ data: "json, name=licensedUsers" })
  licensedUsers?: number;

  @Metadata({ data: "json, name=planCode" })
  planCode?: string;
}
