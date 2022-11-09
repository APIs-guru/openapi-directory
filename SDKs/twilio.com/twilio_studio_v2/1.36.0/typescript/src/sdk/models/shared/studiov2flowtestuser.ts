import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StudioV2FlowTestUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=test_users" })
  testUsers?: string[];

  @Metadata({ data: "json, name=url" })
  url?: string;
}
