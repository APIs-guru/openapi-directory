import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAdminScenarios200ApplicationJsonScenarios extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=possibleStates" })
  possibleStates?: string[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;
}


export class GetAdminScenarios200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=scenarios", elemType: GetAdminScenarios200ApplicationJsonScenarios })
  scenarios?: GetAdminScenarios200ApplicationJsonScenarios[];
}


export class GetAdminScenariosResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getAdminScenarios200ApplicationJsonObject?: GetAdminScenarios200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
