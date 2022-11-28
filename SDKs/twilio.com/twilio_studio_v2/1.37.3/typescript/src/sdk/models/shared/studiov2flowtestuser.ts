import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StudioV2FlowTestUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=test_users" })
  testUsers?: string[];

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
