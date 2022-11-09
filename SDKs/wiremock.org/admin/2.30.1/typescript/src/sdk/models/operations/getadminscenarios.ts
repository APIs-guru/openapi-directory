import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAdminScenarios200ApplicationJsonScenarios extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=possibleStates" })
  possibleStates?: string[];

  @Metadata({ data: "json, name=state" })
  state?: string;
}


export class GetAdminScenarios200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=scenarios", elemType: operations.GetAdminScenarios200ApplicationJsonScenarios })
  scenarios?: GetAdminScenarios200ApplicationJsonScenarios[];
}


export class GetAdminScenariosResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getAdminScenarios200ApplicationJsonObject?: GetAdminScenarios200ApplicationJson;

  @Metadata()
  statusCode: number;
}
